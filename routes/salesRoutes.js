const { Router } = require('express');
const salesController = require('../controllers/salesController');

const router = Router();

router.get('/', salesController.getAll);
router.get('/:id', salesController.getById);
router.delete('/:id', salesController.remove);

module.exports = router;
