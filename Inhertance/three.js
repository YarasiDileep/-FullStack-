class Company{
    Employee(){
        console.log("Ramesh");
    }
}
class Details extends Company {
    Employee(){
        console.log("Rahul");
    }
    Branch(){
        console.log("Bangalore");
    }
}

let c1 = new Details()

c1.Employee()
c1.Branch()