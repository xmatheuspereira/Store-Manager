const connection = require('./connection');

module.exports = {
  getAll: async () => {
    const [products] = await connection
      .query('SELECT * FROM StoreManager.products');
    return products;
  },
  getById: async (id) => {
    const [productsById] = await connection
      .query('SELECT * FROM StoreManager.products WHERE id = ?', [id]);
    return productsById;
  },
};
