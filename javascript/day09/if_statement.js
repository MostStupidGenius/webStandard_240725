/*
    조건문
    주어진 조건의 true/false의 값에 따라
    해당 조건문 코드 블록을 실행할지 여부를 결정하는
    가장 기본적인 (흐름) 제어문이다.
    if(조건문) {
        조건문이 true일 때 실행할 코드
    }
    조건문이 false이면 조건문의 코드 블록은 무시되어 실행되지 않는다
*/

let num = 43
// num 값이 짝수일 경우 실행
if(num % 2 == 0){
    console.log(num, "라는 값은 짝수이다.")

    // else는 위 조건이 거짓일 때 실행되는 코드 블록이다.
    // 때문에, if..else 문법은 반드시 하나는 실행이 된다.
} else {
    console.log(num, "라는 값은 홀수이다.")
}