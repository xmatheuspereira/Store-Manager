const { Router } = require('express');
const productsController = require('../controllers/productsController');
const { isValidName } = require('../middlewares/validations');

const router = Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.post('/', isValidName, productsController.register);
router.put('/:id', isValidName, productsController.update);
router.delete('/:id', productsController.remove);

module.exports = router;
