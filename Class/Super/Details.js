class Account{
    constructor(id,name){
        this.ACC_Id = id
        this.ACC_Name = name
    }
}
class Deposit_Account extends Account{
    constructor(id,name,Deposit_amount){
        super(id,name,Deposit_amount)
        this.Acc_Deposit_Amount = Deposit_amount
        
    }
}
class Saving_Account extends Account{
    constructor(id,name,Deposit_amount,Saving_amount){
        super(id,name,Deposit_amount,Saving_amount)
        this.Deposit_amount = Deposit_amount
        this.Acc_Saving_Amount = Saving_amount

    }
}
class Current_Account extends Account{
    constructor(id,name,Deposit_amount,Saving_amount,Current_amount){
        super(id,name,Deposit_amount,Saving_amount,Current_amount)
        this.Acc_Deposit_Amount = Deposit_amount
        this.Acc_Saving_Amount = Saving_amount
        this.ACC_Current_Amount = Current_amount
    }
}
class Total_Amount_of_Account extends Account{
    constructor(id,name,Deposit_amount,Saving_amount,Current_amount,Total_balance){
        super(id,name,Deposit_amount,Saving_amount,Current_amount,Total_balance)
        this.Acc_Deposit_Amount = Deposit_amount
        this.Acc_Saving_Amount = Saving_amount
        this.ACC_Current_Amount = Current_amount
        this.Total_Balance = Total_balance
    }
}

let A1 =  new Account(101,"Albert")
console.log(A1);
let D1 = new Deposit_Account(102,"Berth",20000)
console.log(D1);
let S1 = new Saving_Account(103,"Charles",20000,30000)
console.log(S1);
let C1 = new Current_Account(104,"Demi",20000,30000,50000)
console.log(C1);
let T1 = new Total_Amount_of_Account(105,"Eva",20000,30000,50000,100000)
console.log(T1);