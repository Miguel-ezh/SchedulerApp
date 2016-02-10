'use strict';
var UserModel = require('../models/users');
var Rx = require('rx');

class User {
    constructor(model){
        this.userModel = model;
    }
    
    set setUserModel(model){
        this.userModel = model;
    }
    
    validNewUserName(user){
        var model = this.userModel;
        var promise = new Promise((resolve, reject) => {
            model
                .findByUsername(user.username)
                .then(
                    function(user){
                        //the user already exist in the database, reject the promise.
                        reject('The username is already in use.');
                    },
                    function(err){
                        resolve(user);
                    });
        });
        
        return promise;
    }
    
    save(user){
        return new Promise((resolve, reject) => {
           var source = Rx.Observable
                .just(user)
                .flatMap(this.validNewUserName.bind(this));
                //.flatMap(this.setUserModel.save(user));
                
           source.subscribe(
               function(result){
                   resolve(result);
               },
               function(err){
                   reject(err);
               }
           );
        });
    }
    
    login(user){
        
    }
    
    get(username){
        
    }
}

module.exports = new User(UserModel);