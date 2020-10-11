const luainjs = require('lua-in-js');

/*const luaEnv = luainjs.createEnv({
    LUA_PATH,   // default value of package.path
    fileExists, // function that takes in a path and returns a boolean
    loadFile,   // function that takes in a path and returns the content of a file
    stdin,      // string representing the standard input
    stdout,     // function representing the standard output
    osExit      // function called by os.exit
})*/




lua = {
    env: null
}

lua.init = function(){
    lua.env = luainjs.createEnv();
}

lua.executeLine = function(line){
    let luaScript = lua.env.parse(line);
    let returnValue = luaScript.exec()
    return returnValue;
}

lua.executeFile = function(file, luaEnv){
    let luaScript = lua.env.parseFile(file);
    let returnValue = luaScript.exec();
    return returnValue;
}

lua.addFunction = function(funcName, func){
    const myLib = new luainjs.Table({ func });
    lua.env.loadLib(funcName, myLib);
}



module.exports = lua;