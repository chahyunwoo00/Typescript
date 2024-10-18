//타입 호환

//인터페이스,클래스
interface Developer{
  name:string;
  skill:string;
}
interface Person{
  name:string;
}
class Person{
  name:string;
}
let developer:Developer;
let person:Person;

//developer=person;  //호환(x)
person=developer;    //호환(o)
//developer=new Person() //호환(x)

//함수
let add =function(a:number){
  //...
}
let sum=function(a:number,b:number){
  //...
}
sum=add;//호환(o)
//add=sum;//호환(x)

//제네릭
interface Empty<T>{

}
let empty1:Empty<string>;
let empty2:Empty<number>
empty1=empty2;
empty2=empty1;

interface NotEmpty<T>{
  data:T;
}
let notempty1:NotEmpty<string>;
let notempty2:NotEmpty<number>;
//notempty1=notempty2;
//notempty2=notempty1;

//=>구조가 더 작은 값에 구조가 더 큰 값을 할당은 가능 반대는 호한안됨
export{}