# Typechain

Learning Typescript by making a Blockchain with it

#### Set up

index.ts에서 있는 파일을 실행시키기 위해 먼저 `npx tsc`로 index.js로 컴파일 시킨 다음 `npm start` or `yarn start` 명령어를 실행시켜야 적용이 된다.

`npm start`를 실행할 때마다 `"prestart": "tsc"`를 실행 후에 start 실행

Node.js는 typescript를 이해하지 못하기 때문에 JS코드로 컴파일하는 작업이 꼭 필요하다.

#### First Step

함수 호출 시 parameter가 있을 경우 parameter 수에 맞게 호출해야 한다.
그렇지 않으면 컴파일도 되지 않는다.

parameter 뒤에 ?를 추가하면 굳이 함수의 parameter로 넘길 필요가 없어진다.

#### interface

object를 넘기고자 할때 Typescript가 object를 이해하고 올바른 타입인지 확인할 수 있도록 해야한다.

#### class

interface들은 js 파일로 컴파일 되지 않는다.

이를 대신해서 class를 사용한다.

js에서는 클래스가 어떤 속성을 가지는지 선언할 필요가 없지만 ts에서는 꼭 필요한 작업이다.

class에서 private 변수를 사용하면 class 바깥에서는 해당 변수 사용 불가능

#### Creating Block chain

Block class 내에서 static method를 사용하면 새로운 Block을 생성하지 않아도 된다.

### 2022 Update

타입스크립트 코드는 컴파일 시 자바스크립트로 변환하지만 컴파일 과정에서 오류가 있을 시 컴파일하지 않는다.

### 타입스크립트의 타입 추론

```ts
// ex1
let a = "hello";
```

타입스크립트는 a가 `string` 타입이라는 걸 바로 알아챈다.

또한 할당 전에 미리 타입을 알려줄수도 있다.

```ts
// ex2
let b: boolean = false;
```

### type alias

```ts
type Player = {
  name: string;
  age?: number;
};

//Player라는 type을 선언해서 playerMaker functuon의 return 타입 지정
function playerMaker(name: string): Player {
  return {
    name,
  };
}
const nico = playerMaker("nico");
nico.age = 12; //Player를 return 하지 않으면 오류가 남
```

```ts
let a: unknown; //unknown: 변수의 타입을 미리 알지 못할 때 사용

if (typeof a === "number") {
  let b = a + 1;
}

if (typeof a === "string") {
  let b = a.toUpperCase();
}
```

```ts
function hello(): never {
  //never: 아무것도 return하지 않을 때 사용
  throw new Error("xxxx");
}
```

### Call Signature

```ts
const add = (a: number, b: number) => a + b;
```

위처럼 코드를 작성하고 add에 hover를 해보면 `const add:(a:number,b:number)=>number`라고 뜨는데, 즉 paramter 타입이 무엇인지, 그리고 함수의 리턴 타입을 설명해주는 것을 `Call Signature`라고 한다.

타입을 미리 지정하여 더욱 간단하게 표현할수도 있다.

```ts
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;
```

### Overloading

오버로딩은 함수가 여러개의 call signature를 가지고 있을 때 발생

```ts
type Add = {
  //c is optional
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

//c가 선택사항이라는 걸 알려줘야 함
const add: Add = (a, b, c?: number) => {
  return a + b;
};
```

parameter의 개수가 다를 경우, c는 number일수도 있다고 가정한다.

### Generic

call signature를 작성할 때 확실한 타입을 모를 경우에 사용

```ts
type SuperPrint = <T>(arr: T[]) => T; //Generic을 사용하여 function 안에 들어가는 element들의 타입을 추론할 수 있도록 한다.

const superprint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superprint([1, 2, 3, 4]);
superprint([true, false]);
superprint([1, 2, true, false]);
```

제네릭을 쓸 때 주의할 점은

```ts
type SuperPrint = (arr: T[]) => T;
```

이렇게 쓰면 타입이 없는 것으로 인식하기 때문에 앞에 <T>를 붙여줘야 한다.

### Class

```ts
class Player {
  constructor(private firstName: string, private lastName: string) {}
}
```

타입스크립트에서 위와 같이 private 변수를 선언하면 다음과 같이 자바스크립트에서 코드가 실행된다.

```js
//자바스크립트 코드에서는 private이 보이지 않는다.
"use strict";
class Player {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
```

### Abstract Class

다른 클래스가 상속받을 수 있는 클래스. 타입스크립트에서는 이 클래스로 인스턴스 생성이 불가능하다.

```ts
abstract class User {
  //다른 클래스가 상속받을 수 있는 클래스
  constructor(
    private firstName: string,
    private lastName: string,
    private nick: string
  ) {}
  abstract getNickName(): void; //call signature
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 추상 메서드는 추상 클래스를 상속받는 클래스들이 반드시 구현(implement)해야하는 메서드이다.
// property를 private으로 만들었다면 그 클래스를 상속했을지라도 그 property에 접근이 불가능하다.
class Player extends User {
  getNickName() {
    console.log(jeong.nick); //error
  }
}

const jeong = new Player("jeong", "ha", "seung");

jeong.getFullName();
```

### Interface

원하는 메소드와 property를 클래스가 가지도록 강제,
자바스크립트 코드로 컴파일 되지는 않는다.

```ts
type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

interface Player {
  nickname: string;
  team: Team;
  healthBar: number;
}

const nico: Player = {
  nickname: "nico",
  team: "red",
  healthBar: 10,
};
```

interface는 단지 object가 어떻게 생겼는지에 대한 설명을 해준다.
type 같은 경우에는 `type alias`사용이 가능하다.

```ts
//ex

type Team = "red" | "blue" | "yellow";
```

### 확장

```ts
interface User {
  name: string;
}

//interface,type의 확장
interface Player extends User {}

type Player = User & {};

const jeong: Player = {
  name: "haha",
};
```

```ts
interface User {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

//interface 상속 시에는 property를 private으로 만들 수 없다.
class Player implements User {
  constructor(private firstName: string, private lastName: string) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}
```

추상 클래스를 쓰면 자바스크립트에서는 일반적인 클래스로 바뀌고 파일 크기도 커진다.

만약 추상 클래스를 다른 클래스들이 특정 모양을 따르도록 하기 위한 용도로 쓴다면 `implements` 키워드를 써야한다.

### lib

타입스크립트에게 어떤 API를 사용하고 어떤 환경에서 코드를 실행하는 지를 지정할 수 있다.
(target 런타임 환경이 무엇인지를 지정.)
프로그램이 브라우저에서 실행되면 lib에 "DOM" 유형 정의를 할 수 있다.
DOM: window, document 등
ex) "lib": ["ES6","DOM"]
