const { StatusCodes, ReasonPhrases } = require('http-status-codes');
const salesService = require('../services/salesService');

module.exports = {

  getAll: async (_req, res) => {
    try {
      const [sales] = await salesService.getAll();
      return res.status(StatusCodes.OK).json(sales);
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const salesById = await salesService.getById(id);
      if (!salesById) {
        return res.status(StatusCodes.NOT_FOUND).json({ message: 'Sale not found' });
      }
      return res.status(StatusCodes.OK).json(salesById);
    } catch (err) {
      console.log(err);
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: ReasonPhrases.INTERNAL_SERVER_ERROR });
    }
  },

};
