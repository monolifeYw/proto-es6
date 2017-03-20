'use strict';

(function () {
  var fn = param1 => {
    var square = param1 * param1;
    return square;
  }

  var fnSame1 = param1 => param1 * param1;
  var fnSame2 = param1 => ({value: param1 * param1});

  console.log(fn(3));
  console.log(fnSame1(4));
  console.log(fnSame2(5));

  console.log('===================');

  let user = {
    name: 'someone'
  };

  function getUserName() {
    return this.name;
  }

  let getUserName2 = () => this.name;

  console.log('1', getUserName.call(user));
  // console.log('2', getUserName2.call(user)); // error
  
  /*function* square(x) {
    yield x * x;
    console.log('x', x);
  }

  let squareGenerator = square(5);*/






})();