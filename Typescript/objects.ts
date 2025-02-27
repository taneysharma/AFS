interface User {
    username:string ,
    age:number
}
// let user:User = {
//     username:"taney" ,
//     age:20
// }

// console.log(user.username);
// user.age="45" ;


let num:number[] = [1,2 ,] ;

num[3] = 45 ;

let numstr:number[] | string []=[] ;
numstr[0] = 1 ;
numstr[1] = "10" ;
console.log(numstr[1]);


interface Emp {
    id:number ,
    ename : string ,
    salary:number ,
    dept:string ,
    getName() : string
}

let emp:Emp = {
    id:1 ,
    ename : "ritik" ,
    salary:200000 ,
    dept:"IT" ,
    getName:function(){
        return this.ename ;
    },
}
let emp2:Emp = {
    id:2 ,
    ename : "ritik" ,
    salary:200000 ,
    dept:"IT" ,
    getName:function(){
        return this.ename ;
    },
}
function empname(em:Emp) {
    return em.getName() ;
}
empname(emp) ;

interface User2 {
    id: number,
    email: string,
    password:string ,
}
let users:User2[] = [
    {
       id:1 ,
       email:"fdfsfdsf" ,
       password:"1234"
    },
    {
        id:2 ,
        email:"fdfsfdsf" ,
        password:"1234"
    }

]

//OR
let some:number | string ;

let arr2:number[] | string[] = ["sdfsdsd","dsds"] 
let arr3:(number|string)[] = [1,"343"] ;