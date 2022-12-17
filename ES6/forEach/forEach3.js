let sum = 0
let num = [10,20,30,40]

//Normal Function using in forEach

num.forEach(myFunction)
    function myFunction(item){
        sum += item
        console.log(sum);
    }

 //Using FatArrow function  
let sum1 = 0
let num1 = [10,20,30,40] 

num1.forEach((item)=>{
    sum1 += item
    console.log(sum1);
})