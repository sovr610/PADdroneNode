const luainjs = require('lua-in-js');

function generic(){

}

generic.prototype.genericFunc = function(args, funcName, func){
    let luaArgs = [];
    for (i = 0; i < args.length; i++){
        luaArgs.push(luainjs.utils.coerceArgToString(args[i], funcName, i));
    }

    return func(luaArgs);
}

module.exports = generic;