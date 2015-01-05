//'use strict';
//
//var Vote = require('../../../models/vote');
//
//module.exports = {
//  description: 'Count all Votes by User',
//  tags:['votes'],
//  cors:{origin: ['http://localhost:8100'], credentials: true},
//  handler: function(request, reply){
//    Vote.count(request.auth.credentials, function(err, count){
//      reply({count:count}).code(err ? 400 : 200);
//    });
//  }
//};
