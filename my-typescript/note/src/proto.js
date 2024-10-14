let user={name:'capt',age:100}

let admin={}
admin.__proto__=user

admin.role='admin';
console.log(admin)//admin에 __proto__속성이 직접적으로 나와있지는 않네