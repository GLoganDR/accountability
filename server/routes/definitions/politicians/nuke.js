//'use strict';
//
//var Joi  = require('joi'),
//    Politician = require('../../../models/politician');
//
//module.exports = {
//  description: 'Delete Politician',
//  tags:['politicians'],
//  validate: {
//    params: {
//      voteId: Joi.number().required()
//    }
//  },
//  handler: function(request, reply){
//    Politician.nuke(request.auth.credentials, request.params.politicianId, function(err, politicianId){
//      reply({politicianId:politicianId}).code(err ? 400 : 200);
//    });
//  }
//};
