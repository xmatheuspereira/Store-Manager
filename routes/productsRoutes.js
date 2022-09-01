const { Router } = require('express');
const productsController = require('../controllers/productsController');

const router = Router();

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.post('/', productsController.register);

module.exports = router;
