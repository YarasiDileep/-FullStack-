let Users = [{"id":1,"name":"Camile Pedel","email":"cpedel0@reverbnation.com","gender":"Female"},
{"id":2,"name":"Keen Voce","email":"kvoce1@yolasite.com","gender":"Male"},
{"id":3,"name":"Valencia Medendorp","email":"vmedendorp2@nasa.gov","gender":"Female"},
{"id":4,"name":"Joela O' Flaherty","email":"jo3@buzzfeed.com","gender":"Female"},
{"id":5,"name":"Ellette Petran","email":"epetran4@blogtalkradio.com","gender":"Female"},
{"id":6,"name":"Hollis Prene","email":"hprene5@mit.edu","gender":"Male"},
{"id":7,"name":"Ashley Ternott","email":"aternott6@prweb.com","gender":"Polygender"},
{"id":8,"name":"Sarine Peeters","email":"speeters7@imgur.com","gender":"Female"},
{"id":9,"name":"Jordanna Davidovic","email":"jdavidovic8@google.ru","gender":"Female"},
{"id":10,"name":"Rowland Pinkstone","email":"rpinkstone9@ning.com","gender":"Male"},
{"id":11,"name":"Myer Jarmaine","email":"mjarmainea@yellowbook.com","gender":"Male"},
{"id":12,"name":"Rahel Poppy","email":"rpoppyb@wunderground.com","gender":"Female"},
{"id":13,"name":"Perl Gullyes","email":"pgullyesc@elpais.com","gender":"Female"},
{"id":14,"name":"Leslie Covill","email":"lcovilld@google.com","gender":"Female"},
{"id":15,"name":"Thedric Oboy","email":"toboye@telegraph.co.uk","gender":"Male"},
{"id":16,"name":"Brenden Cathery","email":"bcatheryf@merriam-webster.com","gender":"Polygender"},
{"id":17,"name":"Hamnet Sarah","email":"hsarahg@oakley.com","gender":"Male"},
{"id":18,"name":"Mady Kingshott","email":"mkingshotth@booking.com","gender":"Female"},
{"id":19,"name":"Armstrong McDougall","email":"amcdougalli@mapy.cz","gender":"Genderqueer"},
{"id":20,"name":"Ida Bacher","email":"ibacherj@cocolog-nifty.com","gender":"Female"},
{"id":21,"name":"Buffy Farbrace","email":"bfarbracek@addthis.com","gender":"Genderfluid"},
{"id":22,"name":"Nap Hourston","email":"nhourstonl@cdc.gov","gender":"Male"},
{"id":23,"name":"Anita Allum","email":"aallumm@businessweek.com","gender":"Female"},
{"id":24,"name":"Cary Batalini","email":"cbatalinin@smugmug.com","gender":"Genderqueer"},
{"id":25,"name":"Niccolo Rodolphe","email":"nrodolpheo@tuttocitta.it","gender":"Male"},
{"id":26,"name":"Korella Wards","email":"kwardsp@noaa.gov","gender":"Female"},
{"id":27,"name":"Marysa Masic","email":"mmasicq@gmpg.org","gender":"Female"},
{"id":28,"name":"Vanya Guilayn","email":"vguilaynr@cargocollective.com","gender":"Female"},
{"id":29,"name":"Aimil Halsey","email":"ahalseys@cnet.com","gender":"Female"},
{"id":30,"name":"Chico Imloch","email":"cimlocht@stanford.edu","gender":"Male"},
{"id":31,"name":"Hayley Waddams","email":"hwaddamsu@auda.org.au","gender":"Genderfluid"},
{"id":32,"name":"Ninnette Isaak","email":"nisaakv@delicious.com","gender":"Female"},
{"id":33,"name":"Lorettalorna Jearum","email":"ljearumw@ifeng.com","gender":"Female"},
{"id":34,"name":"Omero Cousen","email":"ocousenx@reference.com","gender":"Male"},
{"id":35,"name":"Annabela Killby","email":"akillbyy@examiner.com","gender":"Female"},
{"id":36,"name":"Krystal Pagram","email":"kpagramz@domainmarket.com","gender":"Female"},
{"id":37,"name":"Tabb Sarney","email":"tsarney10@gizmodo.com","gender":"Male"},
{"id":38,"name":"Brendon Coldbreath","email":"bcoldbreath11@miitbeian.gov.cn","gender":"Agender"},
{"id":39,"name":"Morgan Stanwix","email":"mstanwix12@patch.com","gender":"Male"},
{"id":40,"name":"Wye Lowman","email":"wlowman13@illinois.edu","gender":"Male"},
{"id":41,"name":"Donia Bowers","email":"dbowers14@hexun.com","gender":"Female"},
{"id":42,"name":"Omar Seer","email":"oseer15@oaic.gov.au","gender":"Male"},
{"id":43,"name":"Justis Manwaring","email":"jmanwaring16@goodreads.com","gender":"Male"},
{"id":44,"name":"Tony Wearing","email":"twearing17@sakura.ne.jp","gender":"Male"},
{"id":45,"name":"Dorian Tooby","email":"dtooby18@sun.com","gender":"Male"},
{"id":46,"name":"Bronny Roblett","email":"broblett19@ezinearticles.com","gender":"Male"},
{"id":47,"name":"Marina Hodgen","email":"mhodgen1a@upenn.edu","gender":"Female"},
{"id":48,"name":"Lauren Medcalf","email":"lmedcalf1b@smugmug.com","gender":"Female"},
{"id":49,"name":"Sharona Okenden","email":"sokenden1c@nature.com","gender":"Female"},
{"id":50,"name":"Giovanni Vittel","email":"gvittel1d@fc2.com","gender":"Male"},
]

function  Emp_Details(){
    rows = ""
    for(let i = 0; i<=Users.length-1; i++){
        rows = rows + `<tr>
                            <td> ${Users[i].id} </td>
                            <td> ${Users[i].name} </td>
                            <td> ${Users[i].email} </td>
                            <td> ${Users[i].gender} </td>
                            <td> ${Users[i].email.substr(Users[i].email.indexOf('@') + 1)} </td>
                       </tr>`
    }
    document.getElementById('table_data').innerHTML = rows
}