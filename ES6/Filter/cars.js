let cars =[
    {Company : "BMW", Model : "X1", Price : 4500000, Color : "Blue"},
    {Company : "Benz", Model : "Cls200", Price : 7500000, Color : "Red"},
    {Company : "Volvo", Model : "X60", Price : 9000000, Color : "White"},
    {Company : "Skoda", Model : "Superb", Price : 4500000, Color : "SkyBlue"},
    {Company : "Ford", Model : "Mustang", Price : 8500000, Color : "Yellow"},
    {Company : "Tata", Model : "Harrier", Price : 3000000, Color : "Black"},
    {Company : "Mahendra", Model : "Xuv700", Price : 2800000, Color : "Violet"},
    {Company : "Maclaren", Model : "Spider600", Price : 38500000, Color : "Orange"},
    {Company : "Lamborghini", Model : "Avandature", Price : 50000000, Color : "YelloGreen"},
    {Company : "Rolls-Royce", Model : "Ghost", Price : 82000000, Color : "Silver"},
    {Company : "Maserati", Model : "Ghibli", Price : 12000000, Color : "Nero Ribelle"},
]

for (car of cars){
    if(car.Price > 10000000){
        console.log(car);
    }
}

for (car of cars){
    if(car.Color === "White" ){
        console.log(car);
    }
}

for (car of cars){
    if(car.Company === "BMW"){
        console.log(car);
    }
}