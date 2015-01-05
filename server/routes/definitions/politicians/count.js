//'use strict';
//
//var Politician = require('../../../models/politician');
//
//module.exports = {
//  description: 'Count all Politicians by User',
//  tags:['politicians'],
//  cors:{origin: ['http://localhost:8100'], credentials: true},
//  handler: function(request, reply){
//    Politician.count(request.auth.credentials, function(err, count){
//      reply({count:count}).code(err ? 400 : 200);
//    });
//  }
//};
