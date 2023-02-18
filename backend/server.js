const experss = require ('express');
const router = require('./routes/userroutes');

const dotenv = require ('dotenv').config();
const port = process.env.PORT || 5000;

const app = experss();
app.use(experss.urlencoded({extended : false}))

const connect = require('./config/db');
connect();

const errorHandler = require ('./middleware/errorMiddleware')

app.use('/api/user',require('./routes/userroutes'));
app.use('/api/prodect',require('./routes/prodectRoutes'));
app.use('/api/userAuth',require('./routes/userAuthRouter'))

app.listen(port,()=>{
    console.log(`port is called ${port}`);
})
