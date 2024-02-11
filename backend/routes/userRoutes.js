const express = require('express');
const { registerUser,authUser,searchUsers } = require('../controllers/userController');
const { authMiddleware } = require('../middleware/authMiddleware');
const router = express.Router()

router.post('/',registerUser)
router.get('/',authMiddleware,searchUsers)
router.post('/auth',authUser)


module.exports = router;