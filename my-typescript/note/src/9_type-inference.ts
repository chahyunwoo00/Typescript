//타입 추론 기본 1
let a;

function getB(b=10){
  let c='hi'
  return b+c;
}

10+'10'//1010

//타입추론 기본 2
interface Dropdown<T>{
  value:T;
  title:string;
}
let shoppingItem:Dropdown<string>={
  value:'abc',
  title:'hello',
}
//제네릭 타입의 추론과 객체 리터럴의 속성 타입 추론

//타입추론 기본3
interface Dropdown2<T>{
  value:T;
  title:string;
}
interface DetailedDropdown<K> extends Dropdown2<K>{
  description:string;
  tag:K;
}

let detailedItem:DetailedDropdown<string>={
  title:'abc',
  description:'ab',
  value:'a',
  tag:'a',
}

//  best common type
let arr=[1,2,true,true,'a'];

//typescript language server



export{};