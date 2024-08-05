/*
    호이스팅(hoistiong)
    : var 변수 선언, 함수 선언
    var 변수 선언에 대해서 해당 스크립트 코드가 실행되는 시점에서
    해당 변수의 선언을 상단에서 한 것처럼 취급하는 개념
*/
// var 변수 선언 방법은 어느 위치에서 선언했든
// 여러 번 선언하더라도 그 순서에 맞게만 실행이 된다.
console.log(x) // undefiend
// console.log(y) // Ref error
x = 3
var x = 3
print(x)
function print(params) {
    console.log(params)
}

/*
    스코프(scope)
    범위
    변수가 선언된 범위 바깥에서 사용될 수 없음을 의미한다.
    함수 내에서 선언된 변수는 바깥에서 선언된 변수와 별개로
    존재하고, 사용된다.
    선언된 위치 안의 다른 코드블록에 들어가서 사용되는 건 가능하다.
*/
// let num1 = 4
function scope() {
    var num1 = 7
}
scope()
console.log(num1)
