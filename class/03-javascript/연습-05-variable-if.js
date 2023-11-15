1 + 1;
// 2
1 + "1";
// '11'
1 + "만원";
// '1만원'
1 - "1";
// 0
"코드" + "캠프";
// '코드캠프'
"123" == 123;
// true
"123" === 123;
// false

// 조건문 실습 1
if (1 + 1 === 2) {
  console.log("정답입니다");
} else {
  console.log("오답입니다");
}
//VM510:2 정답입니다
undefined;
if (0) {
  console.log("정답입니다");
} else {
  console.log("오답입니다");
}
// VM519:4 오답입니다
undefined;
if (1) {
  console.log("정답입니다");
} else {
  console.log("오답입니다");
}
// VM528:2 정답입니다

// 조건문 실습 2
const profile = {
  name: "철수",
  age: "12",
  school: "다람쥐초등학교",
};
// undefined
if (profile.age >= 20) {
  console.log("성인입니다");
} else if (profile.age >= 8 && profile.age <= 19) {
  console.log("학생입니다");
} else {
  console.log("어린이입니다");
}
// VM1303:5 학생입니다
undefined;
if (profile.age >= 20) {
  console.log("성인입니다");
} else if (profile.age >= 8) {
  // 코드 최적화 (profile.age <= 19) 생략
  console.log("학생입니다");
} else if (profile.age > 0) {
  console.log("어린이입니다");
} else {
  console.log("잘못 입력하셨습니다"); // 음수를 입력했을 때
}
// VM1492:5 학생입니다
