'use strict';

(function () {
  var x = 'test',
      y = 42,
      z = {
        id: 'lee',
        _temp: 'temp'
      }

  let obj = {
    x, y, z
  };

  console.log('obj', obj);


  let objWithMethod = {
    someMethod (param) {
      console.log(param);
    },

    sss: function (){
      console.log('s');
    }
  };

  console.log('objWithMethod', objWithMethod);
  objWithMethod.someMethod('[objWithMethod] param es6');


  let dynamicPropertyName = {
    [x + y]: 'some'
  }

  console.log('dynamicPropertyName', dynamicPropertyName);
  console.log('dynamicPropertyName', dynamicPropertyName.test42);

  // Object.assign() 메소드는 열거할 수 있는 하나 이상의 소스 오브젝트로 부터 타켓 오브젝트로 프로퍼티들을 복사하는데 사용
  // 타겟 오브젝트가 반환
  // Object.assign(target, ...src);
  let composedObj = Object.assign({}, objWithMethod, dynamicPropertyName);
  console.log('composedObj', composedObj);
})();







