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

  register: async (name) => {
    const [{ insertId }] = await connection
      .query('INSERT INTO StoreManager.products (name) values (?)', [name]);
    return insertId;
  },

  update: async (id, name) => {
    await connection.query('UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id]);
    return module.exports.getById(id);
  },

  remove: async (id) => {
    const product = await connection.query('DELETE FROM StoreManager.products WHERE id = ?', [id]);
    return product;
  },
};
