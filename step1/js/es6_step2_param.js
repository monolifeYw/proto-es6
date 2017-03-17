'use strict';

(function () {
  
  // default params
  // somethingElse = something + '-else' -> Rest Parameter
  function logSomething(something = 'default message', somethingElse = something + '-else') {
    console.log('something:: ', something);
    console.log('somethingElse:: ', somethingElse);
    console.log('===============================');
  }

  function testFunc(msg, customMsg = 'custom') {
    console.log('testFunc::', msg, customMsg);
  }

  logSomething();
  logSomething(undefined, 'Lee');
  logSomething('custom message', 'Ryan');
  testFunc('message');


  console.log('################ spread operator #################');


  function sum(a, b, c) {
    return a + b + c;
  }

  let nums = [1, 2, 3];

  //spread operator
  console.log('sum : ', sum(...nums));

  let arr = [...nums, 4, 5, 6];

  console.log('arr', arr);

  function checkSpreadOperator(a, b) {
    console.log('checkSpreadOperator:: ', a, b);
    console.log('===============================');
  }

  let obj = {v1: 1, v2: 2};
  let datas = [{id:'abc', num: '123'}, {id: 'haha', num:'777'}];

  checkSpreadOperator(...obj);
  checkSpreadOperator(...datas);

  // function spread operator
  function joinStuff(...stuffs) {
    console.log('stuffs::', stuffs);
    console.log('typeof stuffs::', Object.prototype.toString.call(stuffs));
    console.log('===============================');
  }

  joinStuff(1, 2, 3);
  joinStuff(obj);
  joinStuff(datas);
  joinStuff(...datas);

})();





