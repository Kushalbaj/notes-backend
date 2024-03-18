const express = require('express');
const router = express.Router();
const {createUser} = require('../controller/user-controller');

// Routes
router.post('/create-user', createUser);

module.exports = router;