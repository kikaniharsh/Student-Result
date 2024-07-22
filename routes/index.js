var express = require('express');
const { required } = require('nodemon/lib/config');
var router = express.Router();
const USERS = require('../model/result')
/* GET home page. */


router.get('/', async function(req, res, next) {
  const data = await USERS.find()

  if(req.query.did){
    console.log(req.query.did)
    await USERS.findByIdAndDelete(req.query.did)
    return res.redirect('/')
  }

  let inVal = {}
  if(req.query.eid){
    inVal = await USERS.findById(req.query.eid)
  }
  
  console.log(data);
  let allrecord = data;
  res.render('index', { title: 'Exp~1ress' , rows: allrecord, inVal: inVal, uId: req.query.eid });
});


router.post('/add', async function(req, res, next) {
  try {
   console.log(req.body);
   if(req.body.uId){
     await USERS.findByIdAndUpdate(req.body.uId, req.body)
   } else {
     await USERS.create(req.body)
   }
   // res.render('index', { title: 'Express' });
   res.redirect('/')
  } catch (error) {
   console.log(error.message);
   res.redirect('/')
  }
 });


module.exports = router;
