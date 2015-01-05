'use strict';

module.exports = [
  {method: 'get',    path: '/{param*}',                     config: require('../definitions/static/angular')},
  {method: 'post',   path: '/register',                     config: require('../definitions/users/register')},
  {method: 'post',   path: '/login',                        config: require('../definitions/users/login')},
  {method: 'delete', path: '/logout',                       config: require('../definitions/users/logout')},
  {method: 'get',    path: '/status',                       config: require('../definitions/users/status')}
  //{method: 'get',    path: '/dashboard',                    config: require('../definitions/users/dashboard')}
  //{method: 'post',   path: '/politicians',                  config: require('../definitions/politicians/create')},
  //{method: 'get',    path: '/politicians/{politicianId}',   config: require('../definitions/politicians/show')},
  //{method: 'delete', path: '/politicians/{politicianId}',   config: require('../definitions/politicians/nuke')},
  //{method: 'get',    path: '/politicians/count',            config: require('../definitions/politicians/count')}
];
