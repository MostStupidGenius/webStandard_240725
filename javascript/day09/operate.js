/*
    연산자
    사칙연산
    나머지 연산자
    증감연산자
    대입연산자
        복합할당 연산자
    비교연산자
    논리연산자
    삼항연산자
 */
let num1 = 3 // 3
num1 = 2 + 5 // 7
num1 = 5 - 2 // 3
num1 = 5 * 3 // 15
num1 = 8 / 3 // 나눗셈 연산자
console.log("8 / 3 = ", num1) // 2? 

num1 = 8 % 3 // 2

num1 = 3
num1++ // -> num1 = num1 + 1
console.log("num1++ => " + num1) // 4?

// 대입 연산자, 할당 연산자
let num2 = 10
num2 += 3 // 13
// => num2 = num2 + 3
// += , -=, *=, /= %=
num2 %= 2 // 1
console.log("num2 %= 2 => ", num2)

num1 *= num2 += num2 -= 4

// 비교 연산자

let isBig = 13 > 9
let isDiff = 13 != 9

let isSame = 13 == '13'
console.log("13 == '13'" , isSame)

let isRealSame = 13 === '13'
console.log("13 === '13'" , isRealSame)

// 논리연산자
// AND 비교하는 값들이 모두 true일 때, true 반환
let andOper = 3 > 1 && 1 > 0
console.log("3 > 1 && 1 > 0 => ", andOper)

andOper = 3 > 1 && 1 < 0
console.log("3 > 1 && 1 < 0 => ", andOper)


// OR 비교하는 값들 중 단 하나라도 true이면, true 반환
// -> 모두 false여야 false 반환
let orOper = (3 > 1) || (1 < 0)
console.log("3 > 1 || 1 < 0 => ", orOper)

// 삼항 연산자
// 조건식 ? true일 때 값 : false일 때
// 조건식의 결과에 따라 반환될 값이 정해진다.

let age = 15
console.log("age => ", age)
let isAdult = age >= 18 ? "성인" : "미성년자"
console.log('age >= 18 ? "성인" : "미성년자" => ', isAdult)