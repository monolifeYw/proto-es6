'use strict';

(function () {

    var weakSet = new WeakSet();
    var normalSet = new Set();
    let obj = {};

    weakSet.add(obj);
    normalSet.add(obj);

    console.log(weakSet, weakSet.has(obj));
    console.log(normalSet, normalSet.has(obj));

    weakSet.delete(obj);
    normalSet.delete(obj);

    console.log(weakSet, weakSet.has(obj));
    console.log(normalSet, normalSet.has(obj));

    console.log('=======================');

    let weakMap = new WeakMap();
    

})();