const router = require('express').Router();
const { Pizza } = require('../../models');
const pizzaRoutes = require('./pizza-routes');

//add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;