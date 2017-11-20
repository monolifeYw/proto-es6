'use strict';

(function () {

  var promise = new Promise(function (resolve, reject) {
    console.log('resolve', resolve);
    console.log('reject', reject);

    (Math.random() < .5) ? resolve('success') : reject('failure');
  });

  promise.then(function(msg) {
    console.log(msg);
    return true;
  }, function(err) {
    console.log(err);
    return false;
  }).then(function (value) {
    console.log(value);
  }).then(function (reason) {
    // console.log(reason);
  });

  function getNumberFact(n) {
    var ch = n;

    return new Promise(function (res, rej) {
      if (ch) {
        res('success2');
      } else {
        rej('error2');
      }
    })
  }

  console.log('=====================');
  getNumberFact(Math.floor(Math.random() * 4) % 2)
    .then(
      resol => console.log(resol),
      err => console.log(err)
    );

  console.log('=====================');

  let test1 = (n) => {
    console.log('test1', n);
    return n;
  };

  let test2 = (n) => n;
  let test3 = (n) => ({datas: n});
  let test4 = () => (function(n){ return n + 1; });
  let test5 = n => (
    function(z){ 
      return n + z; 
    }
  );

  test1(99);
  console.log('test2', test2(77));
  console.log('test3', test3(277));
  console.log('test4', test4()(177));
  console.log('test5', test5(30)(177));

  let testPromise = () => (
    new Promise(function (res, rej) {
      var ch = Math.floor(Math.random() * 4) % 2;
      if (ch) {
        res('success_test_pr');
      } else {
        rej('error_test_pr');
      }
    })
  );

  testPromise().then(
    res => console.log(res),
    rej => console.log(rej)
  )


})();