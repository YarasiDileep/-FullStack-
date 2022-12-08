let Employees=[{"id":1,"name":"Lionello Courtliff","email":"lcourtliff0@infoseek.co.jp","gender":"Male"},
{"id":2,"name":"Christiana Blackadder","email":"cblackadder1@scribd.com","gender":"Female"},
{"id":3,"name":"Tani Sibbering","email":"tsibbering2@house.gov","gender":"Female"},
{"id":4,"name":"Cynthia Ody","email":"cody3@smh.com.au","gender":"Female"},
{"id":5,"name":"Portie Sheilds","email":"psheilds4@bluehost.com","gender":"Male"},
{"id":6,"name":"Shep Lampard","email":"slampard5@theguardian.com","gender":"Male"},
{"id":7,"name":"Hermia Clissold","email":"hclissold6@prweb.com","gender":"Female"},
{"id":8,"name":"Birdie Berndtssen","email":"bberndtssen7@parallels.com","gender":"Female"},
{"id":9,"name":"Anthea Byron","email":"abyron8@imageshack.us","gender":"Female"},
{"id":10,"name":"Sigismond Gopsell","email":"sgopsell9@opera.com","gender":"Male"},
{"id":11,"name":"Penny Connue","email":"pconnuea@cornell.edu","gender":"Female"},
{"id":12,"name":"Edward Godin","email":"egodinb@squidoo.com","gender":"Male"},
{"id":13,"name":"Joete Johnston","email":"jjohnstonc@devhub.com","gender":"Non-binary"},
{"id":14,"name":"Catherine Bathersby","email":"cbathersbyd@privacy.gov.au","gender":"Female"},
{"id":15,"name":"Melinde Maskell","email":"mmaskelle@tinypic.com","gender":"Female"},
{"id":16,"name":"Carry Juppe","email":"cjuppef@plala.or.jp","gender":"Female"},
{"id":17,"name":"Paola Drewry","email":"pdrewryg@cyberchimps.com","gender":"Female"},
{"id":18,"name":"Asia Lumm","email":"alummh@gnu.org","gender":"Female"},
{"id":19,"name":"Faber Peever","email":"fpeeveri@skype.com","gender":"Male"},
{"id":20,"name":"Wat Goodlatt","email":"wgoodlattj@w3.org","gender":"Male"},
{"id":21,"name":"Corry Greenaway","email":"cgreenawayk@ustream.tv","gender":"Female"},
{"id":22,"name":"Eada Joreau","email":"ejoreaul@bluehost.com","gender":"Bigender"},
{"id":23,"name":"Brendan Perutto","email":"bperuttom@domainmarket.com","gender":"Male"},
{"id":24,"name":"Paloma Pindar","email":"ppindarn@amazonaws.com","gender":"Female"},
{"id":25,"name":"Colette Glowacki","email":"cglowackio@princeton.edu","gender":"Female"},
]

function userdata(){
    let row = "";
    let i = 0
    while(i<=Employees.length-1){
        row = row + `<tr>
                        <td> ${Employees[i].id} </td>
                        <td> ${Employees[i].name} </td>
                        <td> ${Employees[i].email} </td>
                        <td> ${Employees[i].gender} </td>
                        <td> ${Employees[i].email.substr(Employees[i].email.indexOf('@') + 1 )} </td>
                    </tr>`
                i++
    }
    document.getElementById('qwe').innerHTML=row
}