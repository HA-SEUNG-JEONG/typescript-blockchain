/**
 * @constructor name,age,gender
 */
class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 18, "female");

/**
 * print a name,age,gender
 *
 * @param version name,age,gender
 */
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(lynn));

export {}; // 이 파일이 모듈이 될 수 있도록 고침
