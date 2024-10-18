interface PhoneNumberDictionary{
  [phone:string]:{//key값 이름은 상관없음
    num:number;
  };
}

interface Contact{
  name:string;
  address:string;
  phones:PhoneNumberDictionary;
}

enum PhoneType{
  Home='home',
  Office='office',
  Studio='studio',
}
export{Contact,PhoneType}