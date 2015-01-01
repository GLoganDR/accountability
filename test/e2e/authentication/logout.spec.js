'use strict';

describe('logout', function(){
  it('should logout user', function(){
    browser.get('/#/login');
    element(by.model('user.username')).sendKeys('bob');
    element(by.model('user.password')).sendKeys('123');
    element(by.css('button[ng-click]')).click();
    element(by.id('avatarlink')).click();
    expect(element(by.css('div[ui-view] > h1')).getText()).toEqual('home');
  });
});
