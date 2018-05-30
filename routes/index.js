const express = require('express');
const faker = require('faker');
const router = express.Router();

function mockRestuarant () {
  return {
    company: faker.company.companyName(),
    address: faker.address.streetAddress(),
    image: faker.image.food()
  }
}

router.get('/', (req, res)=>{
  res.render('index', mockRestuarant());
});

router.get('/restaurants', (req, res, next) => {
  res.json({
    path: req.url,
    data: [ mockRestuarant(), mockRestuarant(), mockRestuarant() ]
  })
})


// let randomEatery = faker.company.companyName();
// let randomLocation = faker.address.streetAddress();
// let randomImage = faker.image.food();
// console.log(randomLocation);
// console.log(randomEatery);
// console.log(randomImage);


router.get('/card-template', (req,res)=>{
  res.render('card-template', mockRestuarant());
});

module.exports = router;
