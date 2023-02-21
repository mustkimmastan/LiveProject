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


    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("user already exists");
    }
    const data = await User.create({
        name ,
        email ,
        password
    })

    if(data){
        res.status(201).json({
            _id:data.id,
            name: data.name,
            email:data.email,
            password:data.password
        })
    }else{
        res.status(400)
        throw new Error('data is already exits')
    }
})

// dis LoginUser new users
//routes  POST /api/user/Auth
//access Public

const LoginUser = asyncHandler(async (req, res) => {
    // console.log('dsdsds====>'.req.text);
    const {name,email,password} = req.body
    const user = await User.findOne({email})
    if(user && (bcrypt.compare(password,user.password))){
        res.json({
            _id:user.id,
            name:user.name,
            email:user.email,
            token:generateToken(user._id)
        })
    }   else{
        res.status(400)
        throw new Error('Invaild credentials')
    }
    // res.json({ message: `Login User` })
}
)

// dis GetMe new users
//routes  POST /api/user/Auth/GetME
//access Public

const GetMEUser = asyncHandler(async (req, res) => {
    // console.log('dsdsds====>'.req.text);
    res.json({ message: `GetMe User` })
})

const generateToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn: '30d',
    })
}


module.exports = {
    registerUser,
    LoginUser,

    GetMEUser

}