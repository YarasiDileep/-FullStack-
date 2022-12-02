function cal_age(name,years){
    let no_of_years = 2022 - years
    return "EmployeeName :" + name + "   Age :" + no_of_years
}
let x = cal_age(" Dileep " , 1997)
console.log(x)

console.log(cal_age("Dileep",1998))