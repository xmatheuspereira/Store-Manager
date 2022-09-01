const { StatusCodes } = require('http-status-codes');
const productsService = require('../services/productsService');

module.exports = {

  getAll: async (_req, res) => {
    try {
      const products = await productsService.getAll();
      return res.status(StatusCodes.OK).json(products);
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const productsById = await productsService.getById(id);
      if (!productsById) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });
      }
      return res.status(StatusCodes.OK).json(productsById);
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error' });
    }
  },

  register: async (req, res) => {
    const { name } = req.body;
    try {
      const product = await productsService.register(name);
      return res.status(StatusCodes.CREATED).json(product);
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error' });
    }
  },

  update: async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    try {
      const product = await productsService.update(id, name);
      if (!product) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });
      return res.status(StatusCodes.OK).json({ id, name });
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: 'Internal Server Error' });
    }
  },

};
