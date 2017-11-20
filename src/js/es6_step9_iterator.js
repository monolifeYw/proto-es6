'use strict';

(function () {
    var mySet = new Set([65, 7285, 3]);
    var items = mySet.entries();

    console.log(mySet);
    console.log(items);
    console.log(items.next());
    console.log(items.next());
    console.log(items.next());
    console.log(items.next());

    console.log('================');
    let myMap = new Map([
            ['a', 7],
            ['b', 23]
        ]),
        mapItems = myMap.entries();

    console.log(myMap);
    console.log(mapItems);
    console.log(mapItems.next());   // a, done: false
    console.log(mapItems.next());   // b, done: false
    console.log(mapItems.next());   // done: true

    console.log('================');
    // iterator,  === {{}}.entries() 에서 value만 뽑아줌
    let setValues = mySet.values(),
        mapValues = myMap.values();

    console.log(setValues);
    console.log(mapValues);
    console.log(mapValues.next());

    console.log('================');
    let mapKeys = myMap.keys();
    console.log(mapKeys);
    console.log(mapKeys.next());
})();



