var exec = cordova.require('cordova/exec');

var JustTest = function() {
    console.log('JustTest instanced');
};

JustTest.prototype.show = function(msg, onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'JustTest', 'show', [msg]);
};

if (typeof module != 'undefined' && module.exports) {
    module.exports =  JustTest;
}