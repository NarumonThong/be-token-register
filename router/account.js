const router = require('express').Router();
const { check } = require('express-validator');
const { onRegister, onLogin } = require('../services/account');

// หน้าลงทะเบียน
router.post('/register', [
    check('r_firstname').not().isEmpty(),
    check('r_lastname').not().isEmpty(),
    check('r_phone').not().isEmpty(),
    check('r_email').not().isEmpty(),
    check('r_line').not().isEmpty(),
    check('r_number').not().isEmpty(),
], async (req, res) => {
    try {
        req.validate();
        res.json(await onRegister(req.body));
    }
    catch(ex) {
        res.errorException(ex);
    }
});


module.exports = router;