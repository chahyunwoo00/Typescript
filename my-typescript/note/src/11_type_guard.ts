interface Developer{
  name:string;
  skill:string;
}
interface Person{
  name:string;
  age:number;
}
function introduce(): Developer | Person{
  return {name:'Tony',age:33,skill:'iron making'}
}
let tony=introduce();
//유니온 특성상 공통속성만 접근가능
console.log(tony.name)
//console.log(tony.skill);

if((tony as Developer).skill){
  let skill=(tony as Developer).skill;
  console.log(skill)
}else if((tony as Person).age){
  let age=(tony as Person).age;
  console.log(age);
}

//위의 예제를 타입가드를 적용
//타입 가드 정의
function isDeveloper(target:Developer|Person):target is Developer{
  return (target as Developer).skill !==undefined;
}

if(isDeveloper(tony)){
  console.log(tony.skill)
}else{
  console.log(tony.age)
}