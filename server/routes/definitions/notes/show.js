//'use strict';
//
//var Joi  = require('joi'),
//    Vote = require('../../../models/vote');
//
//module.exports = {
//  description: 'Show Vote',
//  tags:['votes'],
//  validate: {
//    params: {
//      voteId: Joi.number().required()
//    }
//  },
//  cors:{origin: ['http://localhost:8100'], credentials: true},
//  handler: function(request, reply){
//    Vote.show(request.auth.credentials, request.params.voteId, function(err, vote){
//      reply(vote).code(err ? 400 : 200);
//    });
//  }
//};
