const express = require ('express');
const router = express.Router();
const {registerUser,LoginUser,GetMEUser} = require('../contotroller/userAuthContotroller')
const {protect} = require('../middleware/Authmiddleware');
const asyncHandler = require('express-async-handler');


router .post('/re',registerUser);
router .post('/login',LoginUser);
router .get('/Get',protect,GetMEUser);

module.exports = router;
