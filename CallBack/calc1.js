let calc = (a,b,ope)=>{
    if(ope === 'sum'){
        return a+b
    }
    if(ope ==='multi'){
        return a*b
    }

}
let r1 = calc(10,20,'sum')
console.log(r1);
let r2 = calc(10,20,'multi')
console.log(r2);