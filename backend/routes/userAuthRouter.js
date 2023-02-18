const express = require ('express');
const router = express.Router();
const {registerUser,LoginUser,GetMEUser} = require('../contotroller/userAuthContotroller')


router .post('/',registerUser);
router .post('/login',LoginUser);
router .get('/Get',GetMEUser);

module.exports = router;
