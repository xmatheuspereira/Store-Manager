const salesModel = require('../models/salesModel');

module.exports = {

  register: async () => {
    const sales = await salesModel.register();
    return sales;
  },

  getAll: async () => {
    const sales = await salesModel.getAll();
    return sales;
  },

  getById: async (id) => {
    const [salesById] = await salesModel.getById(id);
    if (!salesById[0]) return null;
    return salesById;
  },

  update: async () => {
    const sales = await salesModel.update();
    return sales;
  },

  remove: async (id) => {
    const checkIfItExists = await module.exports.getById(id);
    if (!checkIfItExists) return null;
    const sales = await salesModel.remove(id);
    return sales;
  },
};
