let enames =[{id:101,name:"Dileep",salary:45000},
            {id:102,name:"shadow",salary:55000},
            ]
let namedetails = (details,callback)=>{
    setTimeout(()=>{
        enames.push(details)
        callback()
    },[4000])
}
let getname = ()=>{
    setTimeout(()=>{
        let rows = ""
        for(emp of enames){
            rows = rows + `<tr>
                            <td>${emp.id}</td>
                            <td>${emp.name}</td>
                            <td>${emp.salary}</td>
                        </tr>`
        }
        document.getElementById('xyz').innerHTML = rows
    },[1000])
}

namedetails({id:103,name:"pilgrim",salary:65000},getname);
