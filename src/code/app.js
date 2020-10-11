require('dotenv').config();
const lua = require('./../scripts/lua');
const {Board, Servo} = require("johnny-five");
const board = new Board();

var luaenv = lua.init();

var func = function hello(){
  console.log('hey');
}

var luaenv = lua.addFunction('func', func, luaenv);
lua.executeLine('func()', luaenv);


