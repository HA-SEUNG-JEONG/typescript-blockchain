const name = "jeong",
  age = 28,
  gender = "male";

const sayHi = (name, age, gender?) => {
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);

export {}; // 이 파일이 모듈이 될 수 있도록 고침
