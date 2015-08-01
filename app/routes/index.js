// HOME ROUTE
// =============================================================================

/*global require*/
/*global module*/

'use strict';

var express  = require('express');
var home     = require('./home');
var tracker  = require('./tracker');

var router   = express.Router();

router.use('/', home);
router.use('/tracker', tracker);

module.exports = router;
