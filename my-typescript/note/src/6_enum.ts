//숫자형 enum
enum Shoes{
  Nike,
  Adidas,
}
let myShoes=Shoes.Nike
console.log(myShoes) //0

//문자형 enum
enum Shoes_{
  Nike='나이키',
  Adidas='아디다스',
}
let  myShoes_=Shoes_.Nike
console.log(myShoes_) //'나이키'

//예제
enum Answer{
  Yes='Y',
  No='N',
}
function askQuestion(answer:Answer){
  if(answer==Answer.Yes){
    console.log('정답')
  }
  if(answer==Answer.No){
    console.log('오답')
  }
}
askQuestion(Answer.Yes)
// askQuestion('예스')
// askQuestion('y')
// askQuestion('Yes')
