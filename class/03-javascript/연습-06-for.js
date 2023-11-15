const children = ["철수", "영희", "훈이"];
for (let i = 0; i < children.length; i++) {
  console.log(children[i] + "입니다");
}

// VM1923:3 철수입니다
// VM1923:3 영희입니다
// VM1923:3 훈이입니다
// undefined
let persons = [
  { name: "철수", age: 17 },
  { name: "영희", age: 15 },
  { name: "도우너", age: 5 },
  { name: "그루트", age: 65 },
  { name: "도비", age: 3 },
];
// undefined
for (let count = 0; count < persons.length; count++) {
  if (persons[count].age >= 19) {
    console.log("성인입니다");
  } else {
    console.log("미성년자입니다");
  }
}
// 3VM2723:5 미성년자입니다
// VM2723:3 성인입니다
// VM2723:5 미성년자입니다
undefined;
for (let count = 0; count < persons.length; count++) {
  if (persons[count].age >= 19) {
    console.log(persons[count].name + "님은 성인입니다");
  } else {
    console.log(persons[count].name + "님은 미성년자입니다");
  }
}
// VM2813:5 철수님은 미성년자입니다
// VM2813:5 영희님은 미성년자입니다
// VM2813:5 도우너님은 미성년자입니다
// VM2813:3 그루트님은 성인입니다
// VM2813:5 도비님은 미성년자입니다
