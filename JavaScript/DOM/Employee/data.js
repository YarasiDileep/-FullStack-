let employee = [
        {id:101, name:"Dileep", salary:45000},
        {id:102, name:"James", salary:55000},
        {id:103, name:"Eva", salary:65000},
    ]

function displaydata(){
    let rows = "";
    for(emp of employee){
        rows = rows + 
        `<tr>
            <td> ${emp.id} </td>
            <td> ${emp.name} </td>
            <td> ${emp.salary} </td>
        </tr>`
}
    document.getElementById('abc').innerHTML=rows
}
