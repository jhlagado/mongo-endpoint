const express = require('express');
const router = express.Router();

router.get('/customers', function(req, res, next) {
 res.send('respond with a resource');
});

module.exports = router;