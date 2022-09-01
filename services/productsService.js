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

  register: async (name) => {
    const insertId = await productsModel.register(name);
    return { id: insertId, name };
  },

  update: async (id, name) => {
    const checkIfItExists = await module.exports.getById(id);
    if (!checkIfItExists) return null;
    const products = await productsModel.update(id, name);
    return products;
  },

  remove: async (id) => {
    const checkIfItExists = await module.exports.getById(id);
    if (!checkIfItExists) return null;
    const product = await productsModel.remove(id);
    return product;
  },
  
  search: async (name) => {
    const allProducts = await productsModel.getAll();
    if (!name) return allProducts;
    const product = await productsModel.search(name);
    return product;
  },
};
