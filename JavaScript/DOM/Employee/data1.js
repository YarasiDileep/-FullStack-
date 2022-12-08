let users = [
    {id:1001, name:"Dileep", salary:45000},
    {id:1002, name:"Julie", salary:55000},
    {id:1003, name:"Cythie", salary:65000}
]
function DisplayData(){
    let row = "";
    for (user of users) {
        row = row +
        `<tr> 
            <td> ${user.id} </td>
            <td> ${user.name} </td>
            <td> ${user.salary} </td>
        </td>`
    }
    document.getElementById('xyz').innerHTML=row
}