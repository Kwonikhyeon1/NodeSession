const express = require('express');
const router = express.Router();
const homePage = require('../lib/service/homePage');

router.get('/', (req, res) => {
    console.log('/home/');

    homePage.home(req, res);

});

module.exports = router;