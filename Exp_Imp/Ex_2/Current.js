const Account = require('./Account')
class Current_Account extends Account{
    constructor(id,name,amount){
        super(id,name,"GN")
        this.Acc_Amount = amount
    }
}

let c1 = new Current_Account(102,"Neymar",750000)
console.log(c1);

