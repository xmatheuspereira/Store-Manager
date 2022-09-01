const { Router } = require('express');
const productsController = require('../controllers/productsController');
const { isValidName } = require('../middlewares/validations');

const router = Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.post('/', isValidName, productsController.register);

module.exports = router;
