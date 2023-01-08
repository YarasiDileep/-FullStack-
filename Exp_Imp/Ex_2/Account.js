class Account{
    constructor(id,name,msg){
        this.Acc_Id = id;
        this.Acc_Name = name
        this.Acc_Message = msg
    }
    get_AccName (){
        return this.Acc_Name
    }
}


module.exports = Account