const fruit = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];
//   undefined
for (i = 0; i < fruit.length; i++) {
  console.log(fruit[i].number + " " + fruit[i].title);
}
//   VM3213:2 1 레드향
//   VM3213:2 2 샤인머스켓
//   VM3213:2 3 산청딸기
//   VM3213:2 4 한라봉
//   VM3213:2 5 사과
//   VM3213:2 6 애플망고
//   VM3213:2 7 딸기
//   VM3213:2 8 천혜향
//   VM3213:2 9 과일선물세트
//   VM3213:2 10 귤
//   undefined
for (i = 0; i < fruit.length; i++) {
  // ` `안에서 문자열과 ${변수}를 같이 쓸 경우 ""와 +를 사용하지 않아도 된다
  console.log(`${fruit[i].number} ${fruit[i].title}`);
}
//   VM3245:2 1 레드향
//   VM3245:2 2 샤인머스켓
//   VM3245:2 3 산청딸기
//   VM3245:2 4 한라봉
//   VM3245:2 5 사과
//   VM3245:2 6 애플망고
//   VM3245:2 7 딸기
//   VM3245:2 8 천혜향
//   VM3245:2 9 과일선물세트
//   VM3245:2 10 귤
//   undefined
for (i = 0; i < fruit.length; i++) {
  console.log(`과일 차트${fruit[i].number}위는 ${fruit[i].title}입니다`);
}
//   VM3280:2 과일 차트1위는 레드향입니다
//   VM3280:2 과일 차트2위는 샤인머스켓입니다
//   VM3280:2 과일 차트3위는 산청딸기입니다
//   VM3280:2 과일 차트4위는 한라봉입니다
//   VM3280:2 과일 차트5위는 사과입니다
//   VM3280:2 과일 차트6위는 애플망고입니다
//   VM3280:2 과일 차트7위는 딸기입니다
//   VM3280:2 과일 차트8위는 천혜향입니다
//   VM3280:2 과일 차트9위는 과일선물세트입니다
//   VM3280:2 과일 차트10위는 귤입니다
