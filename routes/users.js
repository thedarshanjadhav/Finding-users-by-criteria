var express = require('express');
var router = express.Router();
let userModel = require('../models/users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get("/create", async function (req, res) {
  let userData = await userModel.create({
    username: "ladki",
    nickname: "ladkiii",
    description: "i'm a ladki",
    categories: ['fashion', 'cooking'],
  });

  res.send(userData);

});

router.get('/find', async function (req, res) {

  // ? To search exact words or name -> case sensitive
  // let regexp = new RegExp('^Harsh$', 'i');
  // let user = await userModel.find({ username: regexp });

  // ----------------------------------------

  // ? To Search by Categories 
  // let user = await userModel.find({ categories: { $all: ["fashion", "sports"] } })

  // ----------------------------------------

  // ? To find data between two dates
  // let date1 = new Date('2024-03-20');
  // let date2 = new Date('2024-03-21');

  // let user = await userModel.find({
  //   datecreated: {
  //     $gte: date1,
  //     $lte: date2
  //   }
  // });

  // ----------------------------------------

  // ? To filter existence of filed in mongoose for eg. categories 
  // let user = await userModel.find({ username: { $exists: true } })

  // ----------------------------------------

  // ? To Filter document based on a specific field's length in mongoose

  // let user = await userModel.find({
  //   $expr: {
  //     $and: [
  //       { $gte: [{ $strLenCP: '$nickname' }, 0] },
  //       { $lte: [{ $strLenCP: '$nickname' }, 6] }
  //     ]
  //   }
  // });

  // -----------------------------------------

  // console.log(user);
  res.send(user)
})


module.exports = router;
