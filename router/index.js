const router = require('express').Router();
const account = require('./account');

//Account router
router.use('/account', account);

module.exports = router;