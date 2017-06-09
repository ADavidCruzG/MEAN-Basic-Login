/**
 * Created by David Cruz on 09/06/2017.
 */
'use strict';

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.sendFile('index.html', {
        root: '../client/views'
    });
});

module.exports = router;