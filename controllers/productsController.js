const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const productsService = require('../services/productsService');

module.exports = {

  getAll: async (_req, res) => {
    try {
      const products = await productsService.getAll();
      return res.status(StatusCodes.OK).json(products);
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
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
        .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
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
        .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
    }
  },

  update: async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    try {
      const product = await productsService.update(id, name);
      if (!product) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });
      return res.status(StatusCodes.OK).json(product[0]);
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
    }
  },

  remove: async (req, res) => {
    const { id } = req.params;
    try {
      const product = await productsService.remove(id);
      if (!product) return res.status(StatusCodes.NOT_FOUND).json({ message: 'Product not found' });
      return res.status(StatusCodes.NO_CONTENT).end();
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
    }
  },

  search: async (req, res) => {
    const { q } = req.query;
    try {
    const products = await productsService.search(q);
    return res.status(200).json(products);
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });      
    }
  },

};
