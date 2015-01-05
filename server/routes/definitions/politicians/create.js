//'use strict';
//
//var Joi  = require('joi'),
//    Politician = require('../../../models/politician');
//
//module.exports = {
//  description: 'Create a Politician',
//  tags:['politicians'],
//  validate: {
//    payload: {
//    }
//  },
//  handler: function(request, reply){
//    Politician.create(request.auth.credentials, request.payload, function(err, politicianId){
//      reply({politicianId:politicianId}).code(err ? 400 : 200);
//    });
//  }
//};
