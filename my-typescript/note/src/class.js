function Person(name,age){
  this.name=name;
  this.age=age
}
let capt=new Person('capt',100)



class Person{
 constructor(name,age){
  console.log('생성 되었습니다')
  this.name=name;
  this.age=age;
 }
}

let seho=new Person('세호',30)//생성되었습니다
