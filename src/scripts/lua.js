const luainjs = require('luainjs');

/*const luaEnv = luainjs.createEnv({
    LUA_PATH,   // default value of package.path
    fileExists, // function that takes in a path and returns a boolean
    loadFile,   // function that takes in a path and returns the content of a file
    stdin,      // string representing the standard input
    stdout,     // function representing the standard output
    osExit      // function called by os.exit
})*/




lua = {}
lua.init = function(){
    const luaEnv = luainjs.createEnv();
    return luaEnv;
}

lua.executeLine = function(line, luaEnv){
    const luaScript = luaEnv.parse(line);
    const returnValue = luaScript.exec()
    return returnValue;
}

lua.executeFile = function(file, luaEnv){
    const luaScript = luaEnv.parseFile(file);
    const returnValue = luaScript.exec();
    return returnValue;
}

lua.addFunction = function(funcName, func, luaEnv){
    const myLib = new luainjs.Table({ func });
    luaEnv.loadLib(funcName, myLib);
    return luaEnv;
}

exports.module = lua;