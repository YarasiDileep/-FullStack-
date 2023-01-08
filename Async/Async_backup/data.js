let employees = [{Id:101,Name:"Dileep",Salary:45000},
                {Id:102,Name:"James",Salary:55000}
            ]

let EmployeesDetails = (emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },[4000])
    
}
let getEmployees = ()=>{
    setTimeout(()=>{
        let rows =""
        for(employee of employees){
            rows = rows + `<tr>
                            <td>${employee.Id}</td>
                            <td>${employee.Name}</td>
                            <td>${employee.Salary}</td>
                            </tr>`
        }
        document.getElementById('asd').innerHTML = rows
    },[1000])
}

EmployeesDetails({Id:103,Name:"Eva",Salary:65000},getEmployees)
