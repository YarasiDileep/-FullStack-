/* class Account {
    min_bal = 1000
    acc_bal = 0

    deposit_amount (amount){
        this.acc_bal = this.acc_bal + amount
    }
    get_bal (){
        return this.acc_bal - this.min_bal
    }

}
let a1 = new Account()
console.log(a1)
console.log('____________________________');
a1.deposit_amount(5000)
a1.deposit_amount(2000)
console.log(a1)
let a2 = new Account()
a2.deposit_amount(8000)

console.log(a2)
console.log("--------------------------------")

let r1 = a1.get_bal()
console.log(r1)
let r2 = a2.get_bal()
console.log(r2) */

class Account {

    min_bal = 500
    acc_bal = 0

    deposit_amount (amount ){
        this.acc_bal = this.acc_bal + amount
    }
    get_bal (){
        return this.acc_bal - this.min_bal
    }
}

let a1 =  new Account()
console.log(a1)

a1.deposit_amount(5000)
console.log(a1)

let r1 = a1.get_bal()
console.log(r1)

