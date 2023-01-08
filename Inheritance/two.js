class A {
    x (){
        console.log("A_Class");
    }
}
class B {
    x (){
        console.log("B_Class");
    }
    y (){
        console.log("C_Class");
    }
}
let c1 = new B()
c1.x()