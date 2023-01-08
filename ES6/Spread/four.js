let User ={
    Id : 101,
    Name : "Dileep",
    Email : "Dileep@gmail.com"
}
let Details = {
    Email : "Dileep1@gmail.com",
    Salary : 45000,
    Location : "Bangalore"
}

let User_Details = {...User,...Details}
console.log(User_Details);