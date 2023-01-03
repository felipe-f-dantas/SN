// Rota de criacao "API"
const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController');

const TaskValidation = require('../middlewares/TaskValidation')

const MacaddressValidation = require('../middlewares/MacaddressValidation')

router.post('/',TaskValidation, TaskController.create );
router.put('/:id',TaskController.update);
router.get('/filter/all',MacaddressValidation, TaskController.all);

module.exports = router;