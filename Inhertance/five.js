/* class one{
    Name = "Dileep"
}
class Two extends one{
    Amount = 45000
}
let c1 = new Two()
console.log(c1); */

class A{
    M1(){
        console.log("A _ Class")
    }
    M2 (){
        console.log("B _ Class");
    }
}
class B extends A {
    M1(){
        console.log("C _ Class")
    }
    M2 (){
        console.log("D _ Class");
    }

}
let C1 = new B()
C1.M1()
C1.M2()