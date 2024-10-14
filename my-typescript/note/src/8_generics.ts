//제네릭을 쓰는이유:재사용에 용이함
//기본함수=>중복 선언해야 유지보수 힘듬
//유니온=>입력은 괜찮으나 반환된값에 대한 메소드쓸때 공통되는 타입에대한 api만 해야 에러안뜸,함수 안에서 매개변수에대한 api 프리뷰를 공통된 타입에 대한 메소드만 자동완성 기능 제공

function logText<T>(text:T):T{
  console.log(text)
  return text;
}

const str=logText<string>('abc')
const login=logText<boolean>(true)


//인터페이스에 제네릭을 선언하는 방법
interface Dropdown{
  value:string;
  selected:boolean;
}
interface Dropdown2<T>{
  value:T;
  selected:boolean;
}
const obj:Dropdown2<string>={ value:'abc',selected:false};
const obj2:Dropdown2<number>={ value:10,selected:false};

//제네릭의 타입 제한:T[]로 배열이라는 힌트
function logTextLength<T>(text:T[]):T[]{
 console.log(text.length)
 text.forEach(function(text){
  console.log(text)
 })
 return text
}
logTextLength<string>(['hi','abc'])

//제네릭 타입 제한 2-정의된 타입 이용하기
interface LengthType{
  length:number;
}
function logTextLengt<T extends LengthType>(text:T):T{
  text.length
  return text
}
//logTextLengt(10)
logTextLengt('10')
logTextLengt({length:10})
//인터페이스는 무조건 객체가 아님 위의 뜻은 length속성을 가진 매개변수를 받는 작업임

//제네릭 타입제한3-keyof
interface ShoppingItem{
  name:string;
  price:number;
  stock:number;
}

function getShoppingItemOption<T extends keyof ShoppingItem >(itemOption:T):T{
  return itemOption
}
//getShoppingItemOption(10)
//getShoppingItemOption<string>('a')
getShoppingItemOption('name')



export{}