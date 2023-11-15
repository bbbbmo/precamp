let classMates = ["철수", "영희", "훈이"];
// undefined
classMates;
// (3) ['철수', '영희', '훈이']
classMates[0];
// '철수'
classMates[1];
// '영희'
classMates[2];
// '훈이'
classMates.includes("훈이");
// true
classMates.includes("맹구");
// false
classMates.length;
// 3
classMates.push("맹구");
// 4
classMates.includes("맹구");
// true
classMates;
// (4) ['철수', '영희', '훈이', '맹구']
classMates.pop();
// '맹구'
classMates;
// (3) ['철수', '영희', '훈이']
let Developer = ["프론트엔드", "백엔드", "포트폴리오", "깃허브", "블로그"];
// undefined
Developer[2];
// '포트폴리오'
let dream = ["커리어 점프", "성공", "할수있다"];
// undefined
Developer.concat(dream);
// (8) ['프론트엔드', '백엔드', '포트폴리오', '깃허브', '블로그', '커리어 점프', '성공', '할수있다']
let result = Developer.concat(dream);
// undefined
result;
// (8) ['프론트엔드', '백엔드', '포트폴리오', '깃허브', '블로그', '커리어 점프', '성공', '할수있다']
