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
