const connection = require('./connection');

module.exports = {

  getAll: async () => {
    const sales = await connection
      .query(
      `SELECT
        sales.id AS saleId,
        sales.date,
        sales_products.product_id AS productId,
        sales_products.quantity
      FROM StoreManager.sales AS sales
      JOIN StoreManager.sales_products AS sales_products
      ON sales.id = sales_products.sale_id`,
);
    return sales;
  },

  getById: async (id) => {
    const salesById = await connection
      .query(
      `SELECT
        sales.date,
        sales_products.product_id AS productId,
        sales_products.quantity
      FROM StoreManager.sales AS sales
      JOIN StoreManager.sales_products AS sales_products
      ON sales.id = sales_products.sale_id
      WHERE id = ?`, [id],
);
    return salesById;
  },

  remove: async (id) => {
    const sales = await connection.query('DELETE FROM StoreManager.sales WHERE id = ?', [id]);
    return sales;
  },

};
