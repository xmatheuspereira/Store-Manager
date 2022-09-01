const productsModel = require('../models/productsModel');

module.exports = {
  getAll: async () => {
    const products = await productsModel.getAll();
    return products;
  },
  getById: async (id) => {
    const [productsById] = await productsModel.getById(id);
    return productsById;
  },
};
