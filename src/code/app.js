require('dotenv').config();
const lua = require('./../scripts/lua');
const gen = require('./../scripts/generics');
const {Board, Servo} = require("johnny-five");
const board = new Board();

var luaenv = lua.init();

var pre_func = function hello(args){
  console.log(args[0]);
}

var genericOne = new gen();
var test_args = [];
test_args.push('hey');

var func = genericOne.genericFunc(test_args, 'sayHi', pre_func);

lua.addFunction('func', func);
console.log(lua);
var cool = lua.executeLine(`func.genericFunc('hey')`);


