const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
  res.render('index');
});

router.get('/card-template', (req,res)=>{
  res.render('card-template');
});

module.exports = router;