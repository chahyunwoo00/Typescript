interface User{
  age:number;
  name:string;
}

//변수에 인터페이스 적용
let seho:User={
  age:33,
  name:'세호'
}

//함수에 인터페이스 적용
function getUser(user:User){
  console.log(user)
}
const capt={
  name:'captain',
  age:20,
}
getUser(capt)

//함수의 스펙(구조)에 인터페이스 활용
interface SumFunction{
  (a:number,b:number):number;
}

let sum:SumFunction;
sum=function(a:number,b:number):number{
  return a+b;
}

//인덱싱->배열을 인터페이스
interface StringArray{
  [index:number]:string;
}
let arr:StringArray=['a','b','c']
//arr[0]=10

//딕셔너리 패턴
interface StringRegexDictionary{
  [key:string]:RegExp;
}

let obj:StringRegexDictionary={
  //sth: /abc/,
  cssFile:/\.css$/,
  jsFile:/\.js$/,
}
//obj['cssFile']='a'

//인터페이스 확장->상속
interface Person{
  name:string;
  age:number;
}
interface Developer extends Person{
  language:string;
}

let captain:Developer={
  language:'ts',
  age:100,
  name:'캠틴',
}