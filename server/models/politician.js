///* jshint camelcase:false */
//
//'use strict';
//
//var pg     = require('../postgres/manager');
//
//function Politician(){
//}
//
//Politician.create = function(user, obj, cb){
//  pg.query('select add_politician($1, $2, $3, $4, $5)', [user.id, obj.name, obj.party, obj.state, obj.vote], function(err, results){
//    cb(err, results && results.rows ? results.rows[0].add_politician : null);
//  });
//};
//
//
//Politician.show = function(user, politicianId, cb){
//  pg.query('select * from show_politician($1, $2)', [user.id, politicianId], function(err, results){
//    cb(err, results && results.rows ? results.rows[0] : null);
//  });
//};
//
//Politician.count = function(user, cb){
//  pg.query('select count(*) from politicians where user_id = $1', [user.id], function(err, results){
//    cb(err, results && results.rows ? results.rows[0].count : null);
//  });
//};
//
//Politician.nuke = function(user, politicianId, cb){
//  pg.query('select nuke_politician($1, $2)', [user.id, politicianId], function(err, results){
//    cb(err, results && results.rows ? results.rows[0].nuke_politician : null);
//  });
//};
//
//module.exports = Politician;
