class Employee{

    acc_id;
    acc_name;
    acc_bal = 0

    constructor(id,name,amount){
        this.acc_id = id
        this.acc_name = name
        this.acc_bal = amount
    }
}
let a1 = new Employee(101, "Dileep", 45000)
let a2 = new Employee(102, "James", 65000)
console.log(a1)
console.log(a2)