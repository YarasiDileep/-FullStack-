let employees = [{id:101,name:"Dileep",sal:45000},
                {id:102,name:"Raja",sal:55000}]

let CreateEmployees = ()=>{
    return new Promise(() => {})
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
CreateEmployees()
getEmployees()