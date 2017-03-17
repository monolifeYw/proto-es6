'use strict';

(function () {
  console.log('####### string ########');
  let testString = 'test string';

  // searchString[, startIdx]
  console.log(testString.startsWith('test'));

  // searchString[, position(lengths)]
  console.log(testString.endsWith('string', 11));

  // searchString[, startIdx]
  console.log(testString.includes('str', 5));

  console.log(testString.repeat(2));

  // ============================================
  console.log('####### number ########');

  console.log('EPSILON', Number.EPSILON);

  console.log('isFinite(1)', Number.isFinite(1));
  console.log('isFinite(Infinity)', Number.isFinite(Infinity));
  
  console.log('isInteger(1)', Number.isInteger(1));
  console.log('isInteger(0.1)', Number.isInteger(0.1));
  console.log('isInteger(Math.pow(2, 53))', Number.isInteger(Math.pow(2, 53)));

  console.log('isSafeInteger(-1)', Number.isSafeInteger(-1));
  console.log('isSafeInteger(Math.pow(2, 53))', Number.isSafeInteger(Math.pow(2, 53)));
  console.log('Math.pow(2, 53))', Math.pow(2, 53));;
})();