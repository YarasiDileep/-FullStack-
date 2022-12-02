/*var num = 1634
let numofdigits = num.toString.length
var sum = 0
let temp = num


while(temp > 0){
    let remainder = temp%10
    temp = parseInt(temp / 10)
    sum =sum + (remainder *remainder *remainder )



if(sum == num){
    console.log("It's Armstrong Number")
}
else{
    console.log("It's Not Armstrong Number")
}
}
*/

/*let num1 = 153
let num2 = num1
let sum1 = 0

while(num1 >0){
    rem = num1%10
    sum1 = sum1 + Math.pow(rem ,num2.length)
    num1 = parseInt(num1/10)
}
if (sum1 == num1){
    console.log("Armstrong")
}
else{
    console.log("Its Not Armstrong")
}*/

/*let a = 0

let b = 153
let c = 0

let x = b

while(x>0){
    a = x%10
    x =parseInt(x/10)
    c = c+(a*a*a)
}

if(c == x){
    console.log("armstrong");
    
}
else{
    console.log("not")
}*/
let e=0;
let x = 0
let d = 0
let b=153;
x=b;

while(x>0){
    e=x%10;
    x=parseInt(x/10);
    d=d+(e*e*e);
    
}
if(b==d){
    console.log("armstrong");
    
}
else{
    console.log("not")
}

var num = 153
let numofdigits = num.toString.length
var sum = 0
let rem = 0
let temp = num


while(temp > 0){
    rem = temp%10
    temp = parseInt(temp / 10)
    sum =sum + (rem *rem *rem )

}

if(sum == num){
    console.log("It's Armstrong Number")
}
else{
    console.log("It's Not Armstrong Number")
}