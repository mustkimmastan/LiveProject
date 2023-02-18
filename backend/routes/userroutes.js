const experss = require('express');
const router = experss.Router();


router.use(experss.json());

const { getusers, setuser, deleteuser, updateuser, loginserver, } = require('../contotroller/userCOntorollers');
router.post('/login',loginserver)
router.get('/', getusers);
router.post('/', setuser);
router.put('/:_id', updateuser);
router.delete('/:_id', deleteuser);



// router.post('/',(req,res)=>{
//     res.status(200).json({messages:"post data"})
// });


// router.put('/:id',(req,res)=>{
//     res.status(200).json({messages:"put data "})
// });


// router.delete('/',(req,res)=>{
//     res.status(200).json({messages:"delete data"})
// });

module.exports = router;