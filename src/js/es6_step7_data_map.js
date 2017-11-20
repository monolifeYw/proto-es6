'use strict';

(function () {
  var myMap = new Map();

  console.log(myMap);

  let otherMap = new Map([
      // [key, value]
      [1, 2], ['a', 'b'], ['lee', 38]
    ]);

  let objMap = new Map([
      {a: 1, b: 2}, {a: 3, b:99}
    ]);

  console.log('otherMap', otherMap);
  console.log('objMap', objMap);      //undefined, undefined

  myMap.set('test', { e: 'f'});

  console.log('myMap', myMap);

  let o1 = new Map(
      [
        ['datas', {a: 1, b:2}]
      ]
    );

  console.log('o1', o1);
  console.log('o1 get', o1.get('datas'));
  console.log('o1 has', o1.has('datas1'));
})();