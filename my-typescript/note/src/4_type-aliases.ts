interface Person{
  name:string;
  age:number;
}

// type Person2={
//  name:string;
//  age:number;
// }

let seho2:Person={
  name:'세호',
  age:30,
}
//->인퍼에이스는 타입에 커서를 둘때 정의만 나오는데 타입별칭은 구조까지 나옴

type MyString=string;
let str:MyString='hello'

type Todo={id:String;title:string;done:boolean}
function getTodo(todo:Todo){

}

//타입 보다는 인퍼페이스가 확장 가능해서 추천!