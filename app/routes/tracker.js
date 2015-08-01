// TRACKER ROUTE
// =============================================================================

/*global require*/

'use strict';

var express = require('express');
var config  = require('../config');
var router  = express.Router();

// CONFIGURE HOME ROUTE
// =============================================================================

// setup default routes (tracker/)
router.get('/', function(req, res, next) {
  var apikey = req.headers.apikey || req.query.apikey || req.body.apikey || 'gunner2015';
  res.json({
    status: 'OK',
    apikey: apikey,
    message: 'Tracker GET'
  });
  console.log('Tracker GET');
  next();
});

router.post('/', function(req, res, next){
  res.status(201).json({
    status:  'OK',
    data:    req.body,
    message: 'Tracker POST'
  });
  console.log('Tracker POST: ',req.body);
  next();
});


// setup routes with `id`   tracker/id
router.get('/:id', function(req, res, next) {
  var apikey = req.headers.apikey || req.query.apikey || req.body.apikey || 'gunner2015';
  res.json({
    status:  'OK',
    id:      req.params.id,
    apikey:  apikey,
    message: 'Tracker GET'
  });
  next();
});

router.put('/:id', function(req, res, next){
  res.json({
    status: 'OK',
    id:      req.params.id,
    data:    req.body,
    message: 'Tracker PUT'
  });
  next();
});

router.patch('/:id', function(req, res, next){
  res.json({
    status: 'OK',
    id:      req.params.id,
    data:    req.body,
    message: 'Tracker PATCH'
  });
  next();
});

router.delete('/:id', function(req, res, next){
  res.json({
    status: 'OK',
    id:      req.params.id,
    data:    req.body,
    message: 'Tracker DELETE'
  });
  next();
});


module.exports = router;
