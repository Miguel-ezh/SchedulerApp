'use strict';
var User = require('./models/user');

class MyTest {
    
   * callFunction(){
        var data = yield User.find({});
        
        return data;
    }
}