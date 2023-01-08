class Account{
    constructor(id,name){
        this.Acc_Id = id;
        this.Acc_Name = name
    }
}
class Saving_Account extends Account{
    constructor(id,name,amount){
        super(id,name)
        this.Acc_Amount = amount
    }
}
let s1 = new Saving_Account(101,"Dileep",50000)
console.log(s1);