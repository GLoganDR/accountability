//'use strict';
//
//var Joi  = require('joi'),
//    Vote = require('../../../models/vote');
//
//module.exports = {
//  description: 'Create a Vote',
//  tags:['votes'],
//  validate: {
//    payload: {
//    }
//  },
//  handler: function(request, reply){
//    Vote.create(request.auth.credentials, request.payload, function(err, voteId){
//      reply({voteId:voteId}).code(err ? 400 : 200);
//    });
//  }
//};
