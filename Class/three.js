class Account{
    min_bal = 500
    acc_bal = 0

    get_bal(amount){
        this.acc_bal = this.min_bal + amount
    }
}
let a1 = new Account()
console.log(a1)
let a2 = new Account()
console.log(a2)
console.log("__________Updating Account Balance __________")
a1.get_bal(5000)
console.log(a1)
a1.get_bal(2000)
console.log(a1)
a2.get_bal(48988)
console.log(a2)