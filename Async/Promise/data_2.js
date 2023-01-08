let employees = [{id:101,name:"Dileep",sal:45000},
                {id:102,name:"Raja",sal:55000}]

let CreateEmployees = (emp)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let flag = true
            if (flag) {
                resolve("Data Inseted Successfully")
                employees.push(emp)
            }
            else {
                reject("Not Inserted")
            }
        },[4000])
    })
}
let getEmployees = ()=>{
    let rows = ""
    setTimeout (()=>{
        employees.forEach((employee)=>{
            rows = rows +`<tr>
                            <td>${employee.id}</td>
                            <td>${employee.name}</td>
                            <td>${employee.sal}</td>
                        </tr>`
        })
        
        document.getElementById("abc").innerHTML = rows
    },[1000])
}
CreateEmployees({id:101,name:"Eco",sal:65000})
            .then(()=>{})
            .catch(()=>{})
getEmployees()