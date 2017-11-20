'use strict';

(function () {

  let [x, y] = ['1', 'a'];
  console.log(x, y);

  let {a, b} = {a: '1', b:'2'};
  console.log(a, b);

  function returnMultipleArr() {
    return [
      ['a', 'b', 'c'],
      [1, 2, 3]
    ];
  }

  let [arr1, arr2] = returnMultipleArr();
  console.log(arr1, arr2);

  let arr = returnMultipleArr();
  console.log(arr);

  let [, c] = ['ignored', 'not ignored'];
  console.log(c);

  let {firstName, lastName, employment: {status}} = {
    firstName: 'Lee',
    lastName: 'Ryan',
    employment: {status: 'is progressing'}
  }
  console.log('firstName: ', firstName);
  console.log('status: ', status);

})();