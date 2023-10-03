// 타입스크립트의 타입 종류

// 1. String
let str: string = "hello typescript!";

// 2. Number
let num: number = 10;

// 3. Boolean
let isTrue: boolean = false;

// 4. Object
let obj: { name: string, age: number, isTrue: boolean} = { name: "Jang", age: 27, isTrue: true}

// 5. Array
let arr : number[] = [1,2,3,4,5];
let arr2: string[] = ["가","나","다"];

// 6. Tuple : 배열의 길이가 고정되고 각 요소의 타입이 지정되어 있는 배열의 형식
let tuple : [string, number] = ["hello", 10];

// 7. Enum : 이넘은 특정 값(상수)들의 집합을 의미한다.
enum Color { Red, Green, Blue };
let cB: Color = Color.Blue;
let cG: Color = Color.Green;
// let cR: Color = Color[0];
let cR:string = Color[0]; // Red

// 8. Any : 어떤 타입이어도 상관없는 타입
let anyArr: any = ['any', 1, '아무거나 들어와도 오케이', 10];

// 9. Void : 일반적으로 함수에서 반환값이 없을 경우 사용한다.
function printText(): void {
  console.log("void");
}

function returnNothing(): void {
  return;
}

// 10. Never : 결코 발생하지 않는 값
function neverEnd(): never {
  while(true) {
    console.log("never");
  }
}
