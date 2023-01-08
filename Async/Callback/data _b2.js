let employees = [{Id:101,Name:"Dileep",Salary:45000},
                 {Id:102,Name:"James",Salary:55000},
                ]
let CreateEmployee = (emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback()
    },[4000])
}
let GetEmployee = ()=>{
    setTimeout(()=>{
        let rows = ""
        for(employee of employees){
            rows = rows + `<tr>
                            <td>${employee.Id}</td>
                            <td>${employee.Name}</td>
                            <td>${employee.Salary}</td>
                            </tr>`
        }
        document.getElementById('abc').innerHTML = rows
    },[1000])
}

CreateEmployee({Id:103,Name :"Meg",Salary : 65000},GetEmployee);

