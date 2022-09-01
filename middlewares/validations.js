const { StatusCodes } = require('http-status-codes');

module.exports = {

  isValidName: async (req, res, next) => {
    const { name } = req.body;
    const FIVE_CHARACTERS = 5;
    if (!name) return res.status(StatusCodes.BAD_REQUEST).json({ message: '"name" is required' });
    if (name.length < FIVE_CHARACTERS) {
      return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
        .json({ message: '"name" length must be at least 5 characters long' });
    }
    next();
  },

};
