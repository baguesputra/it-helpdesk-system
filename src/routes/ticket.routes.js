const express = require('express');
const router = express.Router();
const { update } = require('../controllers/ticket.controller');

router.put('/:id', update);

module.exports = router;