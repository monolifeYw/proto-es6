'use strict';

(function () {


  // basic array
  for (let val of ['a', 'b', 'c']) {
    console.log(val);
  }

  console.log('==========================');

  // Set
  let mySet = new Set([1, 2, 3, 77, -1, 3, 8, 4]);
  mySet.add('something').add('lee').add('park');
  for (let val of mySet) {
    console.log(val);
  }

  console.log('==========================');

  // map
  let myMap = new Map([['datas', {a:1, b:2}]]);
  myMap.set('nameObj', 'yoonwoo');
  for (let val of myMap) {
    console.log(val);
  }
  // ["datas", Object]
  // ["nameObj", "yoonwoo"]


})();