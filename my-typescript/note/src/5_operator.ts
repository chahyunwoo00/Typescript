// function logMessage(value:any){
//   console.log(value)
// }
// logMessage('hello')
// logMessage(100)


//유니온 타입
let seho: string|number

function logMessage(value:string | number){
  if(typeof value =='number'){
    value.toLocaleString()
    //타입을 추론하면서 해당 타입에 맞는 api자동완성
  }
  if(typeof value=='string'){
    value.toString()
    
  } 
  throw new TypeError('value muset be string or number')
}
logMessage('hello')
logMessage(100)

interface Developer{
  name:string;
  skill:string
}
interface Person{
  name:string;
  age:number;
}
function askSomeone(someone: Developer|Person){
  //유니온 특징:인터페이스에서 Developer와 Person의 공통된 속성만 접근가능
  someone.name
  
}

//인터셉션
let sehoo:string|number|boolean
let captt:string&number&boolean//모순

function askSomeoneU(someone:Developer | Person){
  someone.name
  //someone.skill
  //someone.age
}
function askSomeoneI(someone:Developer & Person){
  someone.name
  someone.skill
  someone.age
}

//유니온과 인터섹션의 차이점
//유니온:호출할때 인자는 인터페이스 규격중 하나만 만족하면 되나 함수안에서 객체의 속성으로 접근 할때는 공통속성만 가능
//인터섹션 호출할때 인자는 모든 인터페이스 속성을 넣어주고 함수안에서 객체의 속성 접근은 모두 가능

//실무에서는 유니온을 많이 사용


export {}