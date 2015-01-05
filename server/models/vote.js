///* jshint camelcase:false */
//
//'use strict';
//
//var pg     = require('../postgres/manager');
//
//function Vote(){
//}
//
//Vote.create = function(user, obj, cb){
//  pg.query('select add_vote($1, $2, $3, $4, $5)', [user.id, obj.name, obj.party, obj.state, obj.decision], function(err, results){
//    cb(err, results && results.rows ? results.rows[0].add_vote : null);
//  });
//};
//
//
//Vote.show = function(user, voteId, cb){
//  pg.query('select * from show_vote($1, $2)', [user.id, voteId], function(err, results){
//    cb(err, results && results.rows ? results.rows[0] : null);
//  });
//};
//
//Vote.count = function(user, cb){
//  pg.query('select count(*) from votes where user_id = $1', [user.id], function(err, results){
//    cb(err, results && results.rows ? results.rows[0].count : null);
//  });
//};
//
//Vote.nuke = function(user, voteId, cb){
//  pg.query('select nuke_vote($1, $2)', [user.id, voteId], function(err, results){
//    cb(err, results && results.rows ? results.rows[0].nuke_vote : null);
//  });
//};
//
//module.exports = Vote;
