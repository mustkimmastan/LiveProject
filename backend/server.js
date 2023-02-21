const experss = require('express');
const router = require('./routes/userroutes');
// const multer1 = require('multer');
const multer = require('multer');
const path = require('path')
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;

const app = experss();
app.use(experss.urlencoded({ extended: false }))

app.use('/profile',experss.static('uplode/images'))
const connect = require('./config/db');
connect();

const errorHandler = require('./middleware/errorMiddleware');

app.use('/profile',experss.static('uplode/images'))
app.use('/api/user', require('./routes/userroutes'));
app.use('/api/prodect', require('./routes/prodectRoutes'));
app.use('/api/userAuth', require('./routes/userAuthRouter'))


const storage = multer.diskStorage({
    destination :"./uplode/images",
    filename:(req,file,cb)=>{
        return cb(null,`${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const uplode = multer({
    storage:storage
});

app.post('/uplode', uplode.single('profile'), (req, res) => {
    console.log(req.file);
    res.json({
        success:1,
        profile_url:`http://localhost:8000/profile/${req.file.filename}`
    })
})

app.listen(port, () => {
    console.log(`port is called ${port}`);
})


// app.post('/uplode',uplode.single('profile'))


// const multer = require('multer');

// const fileupdate = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, cb) {
//             cb(null, "image")
//         },
//         filename: function (req, file, cb) {
//             cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//         }
//     })
// }).single("data");
