---
layout: post
title: ES6 기본 함수 매개변수(default function parameter)
bigimg: /img/es6.png
---



JAVASCRIPT에서, 함수의 매개변수는 undefinde가 기본이다. 그러나, 일부 상황에서는 다른 기본값을 설정하는 것이 유용할 수 있다.  
<br/>
과거에는, 기본값 설정을 위한 일반 전략이 함수 몸통에서 매개변수 값을 검사해 undefined인 경우 값을 할당하는것이였다.  
<br/>
ES6에서 기본 매개변수라면, 함수 머리에 기본값을 둘수있다. 따라서 매개변수 값을 검사해 undefinde인 경우를 찾을 필요가 없다.

<br /><br />

### 기본문법
``` javascript
function multiply(a, b = 1) {
  return a*b;
}

multiply(5, 2); // 10
multiply(5); // 5
multiply(5, undefined); // 5
```
<br /><br />

### 기존문법
``` javascript
function multiply(a, b) {
  return a * b;
}

multiply(5, 2); // 10
multiply(5);    // NaN !
```

<br /><br />