const express = require('express');
const faker = require('faker');
const router = express.Router();

router.get('/', (req, res)=>{
  res.render('index', {
  	company: faker.company.companyName(),
  	address: faker.address.streetAddress(),
  	image: faker.image.food()
	});
});


// let randomEatery = faker.company.companyName();
// let randomLocation = faker.address.streetAddress();
// let randomImage = faker.image.food();
// console.log(randomLocation);
// console.log(randomEatery);
// console.log(randomImage);


router.get('/card-template', (req,res)=>{
  res.render('card-template', {
  	company: faker.company.companyName(),
  	address: faker.address.streetAddress(),
  	image: faker.image.food()
	});
});

module.exports = router;