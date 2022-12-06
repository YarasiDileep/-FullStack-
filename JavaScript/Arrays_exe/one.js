let Activities = ["sleep","work","exercies"]
let newroutine = ["eat"]

Activities.sort();                           //using Sort Method
console.log(Activities);

const position = Activities.indexOf("work")     // using index Method
console.log(position)

const newActivites = Activities.slice(1)        //using slice Method 
console.log(newActivites)

const Routine = Activities.concat(newroutine)       // using Concat Method
console.log(Routine)