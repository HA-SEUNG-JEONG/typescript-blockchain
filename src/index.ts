const sayHi = (name: string, age: number, gender: string): string => {
  return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};

console.log(sayHi("jeong", 24, "male"));

export {}; // 이 파일이 모듈이 될 수 있도록 고침
