const Account = require('./Account')
class Saving_Account extends Account{
    constructor(id,name,amount){
        super(id,name,"GM")
        this.Acc_Amount = amount
    }
}
let s1 = new Saving_Account(101,"Messi",500000)
console.log(s1);
let G1 = s1.get_AccName()
console.log(G1);


