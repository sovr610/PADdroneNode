const redrun = require('redrun');

redrun('one', {
  one: 'npm run pretty',
  two: 'npm run build',
  three: 'npm run startProd',
});

/*redrun('one', {
    one: 'redrun -p two three',
    two: 'redrun four five',
    three: 'echo \'hello\'',
    four: 'jshint lib',
    five: 'jscs test'
});*/
