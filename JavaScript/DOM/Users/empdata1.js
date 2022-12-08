let Employees=[
{"id":26,"name":"Wilmar MacGaffey","email":"wmacgaffeyp@epa.gov","gender":"Male"},
{"id":27,"name":"Morganica Hause","email":"mhauseq@msn.com","gender":"Female"},
{"id":28,"name":"Miltie Cheves","email":"mchevesr@wix.com","gender":"Genderqueer"},
{"id":29,"name":"Babette Eagan","email":"beagans@china.com.cn","gender":"Female"},
{"id":30,"name":"Aidan Antonik","email":"aantonikt@npr.org","gender":"Female"},
{"id":31,"name":"Misti Rossin","email":"mrossinu@wunderground.com","gender":"Female"},
{"id":32,"name":"Blaire Possel","email":"bposselv@printfriendly.com","gender":"Female"},
{"id":33,"name":"Sherwin Habeshaw","email":"shabeshaww@wikia.com","gender":"Male"},
{"id":34,"name":"Noelle Dryburgh","email":"ndryburghx@yale.edu","gender":"Female"},
{"id":35,"name":"Candi Stoffels","email":"cstoffelsy@naver.com","gender":"Female"},
{"id":36,"name":"Zaccaria Casino","email":"zcasinoz@nationalgeographic.com","gender":"Male"},
{"id":37,"name":"Jennilee Staggs","email":"jstaggs10@wisc.edu","gender":"Female"},
{"id":38,"name":"Alys Edgett","email":"aedgett11@gmpg.org","gender":"Female"},
{"id":39,"name":"Etienne Mattocks","email":"emattocks12@soundcloud.com","gender":"Male"},
{"id":40,"name":"Dalia Perllman","email":"dperllman13@weibo.com","gender":"Female"},
{"id":41,"name":"Mellicent Boatwright","email":"mboatwright14@flavors.me","gender":"Female"},
{"id":42,"name":"Nikola Tench","email":"ntench15@who.int","gender":"Male"},
{"id":43,"name":"Ingelbert Oldacre","email":"ioldacre16@qq.com","gender":"Male"},
{"id":44,"name":"Patty Kainz","email":"pkainz17@smh.com.au","gender":"Male"},
{"id":45,"name":"Bette Barlace","email":"bbarlace18@newsvine.com","gender":"Female"},
{"id":46,"name":"Frayda Ganiford","email":"fganiford19@fema.gov","gender":"Female"},
{"id":47,"name":"Barthel Ugo","email":"bugo1a@merriam-webster.com","gender":"Male"},
{"id":48,"name":"Zolly Pallas","email":"zpallas1b@issuu.com","gender":"Male"},
{"id":49,"name":"Frederick Grellier","email":"fgrellier1c@sakura.ne.jp","gender":"Male"},
{"id":50,"name":"Angel McKennan","email":"amckennan1d@dropbox.com","gender":"Agender"}]

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