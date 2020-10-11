const luainjs = require('lua-in-js');
var luaEnv = luainjs.createEnv();

function helloBuilder(name) {
    const NAME = luainjs.utils.coerceArgToString(name, 'sayHi', 1)
    return `Hello ${NAME}!`
}
 
const myLib = new luainjs.Table({ helloBuilder })
luaEnv.loadLib('myLib', myLib)
 
const helloStr = luaEnv.parse(`return myLib.helloBuilder('John')`).exec()
console.log(helloStr)
const helloStr2 = luaEnv.parse(`return sayHi('Johns')`).exec()
console.log(helloStr2)