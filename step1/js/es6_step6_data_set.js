'use strict';

(function () {
  var mySet = new Set();

  let anArr = [1, 2, 3, 77, -1, 3, 8, 4];

  var objSet = new Set(anArr);

  window.ooo = objSet;
  console.log(objSet);
  console.log(objSet.size);

  mySet.add('something').add('lee').add('park');
  mySet.delete('lee');

  console.log('mySet', mySet);
  console.log('mySet has something', mySet.has('something'));
  console.log('mySet has lee', mySet.has('lee'));

  mySet.clear();
  console.log('mySet', mySet);

  // ===============
  // 
  objSet.forEach(function (value1, value2, set) {
    console.log('objSet value1', value1);
    console.log('objSet value2', value2);
    console.log('objSet set', set);
  });

  console.log('objSet[0]', objSet[0]);  // undefined
})();