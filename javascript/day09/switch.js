// 멜론 등급 1 ~ 3
// 작은 숫자가 높은 등급인데
// 높은 등급은 아래 등급에 제공되는 혜택을 포함한다.
let grade = 3
console.log("등급: ", grade)
switch (grade) {
    case 1:
        console.log("무제한 음악 감상")
    case 2:
        console.log("곡 다운로드 30곡")
    case 3:
        console.log("음악 감상 30곡")
        break;
    default:
        // 무료 등급
        console.log("무료 듣기 1분")
        break;
}