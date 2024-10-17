//타입 단언
let a;
a=20;
a='a'
let b=a as string;

//dom api 조작
// <div id="app"></div>

let div=document.querySelector('div')
if(div){
  div.innerText
}

let div2=document.querySelector('conatiner') as HTMLDivElement;
div2.innerText