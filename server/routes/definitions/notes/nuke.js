//'use strict';
//
//var Joi  = require('joi'),
//    Vote = require('../../../models/vote');
//
//module.exports = {
//  description: 'Delete Vote',
//  tags:['votes'],
//  validate: {
//    params: {
//      voteId: Joi.number().required()
//    }
//  },
//  handler: function(request, reply){
//    Vote.nuke(request.auth.credentials, request.params.voteId, function(err, voteId){
//      reply({voteId:voteId}).code(err ? 400 : 200);
//    });
//  }
//};
