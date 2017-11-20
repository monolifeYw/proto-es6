# ES6 Exercise Usage
---
## Installation
    $ npm install

## Configuration
### package.json 내 entries 목록
* type : `array`
* CLI 실행시 참고할 Entry 기준 목록

```
"entries": [
    "es6_step1_scope",
    "es6_step2_param",
    "es6_step3_number",
    "es6_step4_array",
    "es6_step5_object",
    "es6_step6_data_set",
    "es6_step7_data_map",
    "es6_step8_weak",
    "es6_step9_iterator",
    "es6_step10_loop",
    "es6_step11_function",
    "es6_step12_promise",
    "es6_step13_class",
    "es6_step14_other_features"
  ]
```

###내부 Data 기준

> `src/js` 내에 있는 소스

##Run in development (base)

    $ npm start

> `es6_step1_scope` 첫번째 배열 collection number 기준

##Run in development for entry

    $ npm start -- 2

> `es6_step2_param` 이 build 되며 실행

##View in Browser

> http://localhost:7777