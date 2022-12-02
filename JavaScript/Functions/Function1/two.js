function add(a,b,c=100){
    console.log(a+b+c)
}
add(10,20,30) //a + b + c
add(10,20) // a + b + 100
add(10)  // NAN
add("Rahul","Gandhi")