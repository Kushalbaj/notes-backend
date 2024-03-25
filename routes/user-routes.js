const express = require('express');
const router = express.Router();
const {createUser,getUser,getUserbyId,deleteUser,updateUser} = require('../controller/user-controller');

// Routes
router.post('/create-user', createUser);
router.get('/get-user', getUser);
router.get('/get-user/:id', getUserbyId);
router.delete('/delete-user/:id', deleteUser);
router.put('/update-user/:id', updateUser);

module.exports = router;