class A {
    M1(){
        console.log("Class - A : M1()");
    }
}
class B extends A {
    constructor(a,b){
        super(a,b)
        this.First_B = b
    }
    M1(){
        super.M1()
        console.log("Class - B : M1()");
    }
    M2(){
        console.log("Class - B : M2()");
    }
}

let a1 = new B (10,20)
a1.M1()
a1.M2()
