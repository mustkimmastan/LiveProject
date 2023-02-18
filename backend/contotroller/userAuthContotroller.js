const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler')
const User = require('../model/userAuthmodel')


// dis RegisterUser new users
//routes  POST /api/user/Auth
//access Public

const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }else{
        res.json({ message: req.body })
    }


    // const userExists = await User.findOne({ email })
    // if (userExists) {
    //     res.status(400)
    //     throw new Error("user already exists");
    // }
    

})

// dis LoginUser new users
//routes  POST /api/user/Auth
//access Public

const LoginUser = asyncHandler(async (req, res) => {
    // console.log('dsdsds====>'.req.text);
    res.json({ message: `Login User` })
}
)

// dis GetMe new users
//routes  POST /api/user/Auth/GetME
//access Public

const GetMEUser = asyncHandler(async (req, res) => {
    // console.log('dsdsds====>'.req.text);
    res.json({ message: `GetMe User` })
})


module.exports = {
    registerUser,
    LoginUser,

    GetMEUser

}