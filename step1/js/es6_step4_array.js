'use strict';

(function () {
  console.log('Array.of', Array.of('test', [1, 2], {foo: 'bar'}));

  function arrayFromArgs() {
    return Array.from(arguments);
  }

  console.log(arrayFromArgs('something', 'else', 1, [3, 4, 5]));
  console.log(typeof arrayFromArgs('something', 'else', 1, [3, 4, 5]));
  console.log('===========================');

  let arr = [
    {
      name: 'lee', 
      age: 38
    },
    {
      name: 'kim',
      age: 20
    }
  ];

  function findByName(name) {
    return arr.find(function (item) {
      console.log('item', item);
      return item.name === name;
    });
  }

  console.log('findByName', findByName('kim'));

  function findByIdx(name) {
    return arr.findIndex(function (item) {
      return item.name === name;
    });
  }

  console.log('findByIdx', findByIdx('kim'));

  // arr.copyWithin(target, start, end)
  // 배열의 일부를 동일한 배열의 다른 위치로 복사 한 다음 크기를 수정하지 않고 반환
  console.log(arr.copyWithin(1, 0));

  console.log('original', [1, 2, 3, 4, 5]);

  // 2, 3, 4, 5, 5
  // 0번째 위치에서 1번째 index의 값을 순서대로 복사함
  console.log('test', [1, 2, 3, 4, 5].copyWithin(0, 1));

})();




