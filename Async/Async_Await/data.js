let employees =[{id:101,name:"Dileep",sal:45000},{id:102,name:"Emma",sal:45000}]

let CreatEmployees = (emp)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let flag = true
        if(flag){
            resolve("Data Inserted Successfully")
            employees.push(emp)
        }
        else{
            reject("Not Inserted")
        }
        },[4000])
    })
}
let getEmployees = ()=>{
    setTimeout(() => {
        let rows = ""
        employees.forEach((employee)=>{
        rows = rows +`<tr>
                        <td>${employee.id}</td>
                        <td>${employee.name}</td>
                        <td>${employee.sal}</td>
                    </td>`
    })
    document.getElementById("abc").innerHTML = rows
    }, [1000])   
}
let execute = async()=>{
    await CreatEmployees({id:103,name:"Eva",sal:65000})
    getEmployees()
}
execute()
