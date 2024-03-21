const express = require('express');
const router = express.Router();
const {createUser,getUser,getUserbyId,deleteUser,updateUser} = require('../controller/user-controller');

// Routes
router.post('/create-user', createUser);
router.post('/get-user', getUser);
router.post('/get-user/:id', getUserbyId);
router.post('/delete-user/:id', deleteUser);
router.post('/update-user/:id', updateUser);

module.exports = router;