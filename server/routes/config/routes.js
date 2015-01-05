'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}',                     config: require('../definitions/static/angular')},
  {method: 'post',   path: '/register',                     config: require('../definitions/users/register')},
  {method: 'post',   path: '/login',                        config: require('../definitions/users/login')},
  {method: 'delete', path: '/logout',                       config: require('../definitions/users/logout')},
  {method: 'get',    path: '/status',                       config: require('../definitions/users/status')}
  //{method: 'post',   path: '/votes',                        config: require('../definitions/votes/create')},
  //{method: 'get',    path: '/votes/{voteId}',               config: require('../definitions/votes/show')},
  //{method: 'delete', path: '/votes/{voteId}',               config: require('../definitions/votes/nuke')},
  //{method: 'get',    path: '/votes/count',                  config: require('../definitions/votes/count')}
];
