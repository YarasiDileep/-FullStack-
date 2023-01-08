class Amount{
    constructor(id,name,msg){
        this.Acc_Id = id;
        this.Acc_Name = name
        this.Acc_Message = msg
    }
}
class Saving_Account extends Amount{
    constructor(id,name,amount){
        super(id,name,"GM")
        this.Acc_Amount = amount
    }
}

class Current_Account extends Amount{
    constructor(id,name,amount){
        super(id,name,"GN")
        this.Acc_Amount = amount
    }
}


let s1 = new Saving_Account(101,"Messi",500000)
console.log(s1);

let c1 = new Current_Account(102,"Neymar",750000)
console.log(c1);