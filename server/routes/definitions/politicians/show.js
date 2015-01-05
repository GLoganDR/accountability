//'use strict';
//
//var Joi  = require('joi'),
//    Politician = require('../../../models/politician');
//
//module.exports = {
//  description: 'Show Politician',
//  tags:['politician'],
//  validate: {
//    params: {
//      politicianId: Joi.number().required()
//    }
//  },
//  cors:{origin: ['http://localhost:8100'], credentials: true},
//  handler: function(request, reply){
//    Politician.show(request.auth.credentials, request.params.politicianId, function(err, politician){
//      reply(politician).code(err ? 400 : 200);
//    });
//  }
//};
