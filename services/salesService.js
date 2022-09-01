const salesModel = require('../models/salesModel');

module.exports = {

  getAll: async () => {
    const sales = await salesModel.getAll();
    return sales;
  },

  getById: async (id) => {
    const [salesById] = await salesModel.getById(id);
    if (salesById.length === 0) return null;
    return salesById;
  },

  remove: async (id) => {
    const checkIfItExists = await module.exports.getById(id);
    if (!checkIfItExists) return null;
    const sales = await salesModel.remove(id);
    return sales;
  },
};
