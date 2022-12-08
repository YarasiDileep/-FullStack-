let Users = [{"id":100,"name":"Enriqueta Crutchfield","email":"ecrutchfield2r@google.com.au","gender":"Female"},
{"id":101,"name":"Kimmy Jewar","email":"kjewar2s@booking.com","gender":"Female"},
{"id":102,"name":"Rozina Rudkin","email":"rrudkin2t@xinhuanet.com","gender":"Female"},
{"id":103,"name":"Tulley Levett","email":"tlevett2u@ebay.com","gender":"Male"},
{"id":104,"name":"Arlan Leys","email":"aleys2v@bravesites.com","gender":"Male"},
{"id":105,"name":"Cynde Borne","email":"cborne2w@taobao.com","gender":"Bigender"},
{"id":106,"name":"Paulina Abrashkin","email":"pabrashkin2x@jimdo.com","gender":"Female"},
{"id":107,"name":"Harmony Seaborne","email":"hseaborne2y@aboutads.info","gender":"Female"},
{"id":108,"name":"Kat Adacot","email":"kadacot2z@flickr.com","gender":"Female"},
{"id":109,"name":"Krista Hazart","email":"khazart30@loc.gov","gender":"Female"},
{"id":110,"name":"Zerk Durgan","email":"zdurgan31@webs.com","gender":"Genderqueer"},
{"id":111,"name":"Charline Fullylove","email":"cfullylove32@stanford.edu","gender":"Female"},
{"id":112,"name":"Benedetto Karpfen","email":"bkarpfen33@globo.com","gender":"Male"},
{"id":113,"name":"Danita Renwick","email":"drenwick34@soundcloud.com","gender":"Female"},
{"id":114,"name":"Abdel Agiolfinger","email":"aagiolfinger35@gizmodo.com","gender":"Male"},
{"id":115,"name":"Llywellyn Arent","email":"larent36@prweb.com","gender":"Male"},
{"id":116,"name":"Darlene Reynold","email":"dreynold37@yelp.com","gender":"Female"},
{"id":117,"name":"Karee Callacher","email":"kcallacher38@flickr.com","gender":"Agender"},
{"id":118,"name":"Rockwell Mughal","email":"rmughal39@cbslocal.com","gender":"Male"},
{"id":119,"name":"Lina Bemlott","email":"lbemlott3a@scribd.com","gender":"Female"},
{"id":120,"name":"Codie Egginton","email":"cegginton3b@cocolog-nifty.com","gender":"Male"},
{"id":121,"name":"Leonore Koch","email":"lkoch3c@nationalgeographic.com","gender":"Female"},
{"id":122,"name":"Dennis Simla","email":"dsimla3d@bloomberg.com","gender":"Male"},
{"id":123,"name":"Galina Molfino","email":"gmolfino3e@last.fm","gender":"Female"},
{"id":124,"name":"Clevie Spandley","email":"cspandley3f@ustream.tv","gender":"Genderqueer"},
{"id":125,"name":"Vale Covell","email":"vcovell3g@a8.net","gender":"Female"},
{"id":126,"name":"Andromache Poller","email":"apoller3h@tripadvisor.com","gender":"Female"},
{"id":127,"name":"Dallon Hunnaball","email":"dhunnaball3i@opensource.org","gender":"Male"},
{"id":128,"name":"Norah Peaurt","email":"npeaurt3j@nba.com","gender":"Genderqueer"},
{"id":129,"name":"Bucky Fairbank","email":"bfairbank3k@cbc.ca","gender":"Male"},
{"id":130,"name":"Myron Smallman","email":"msmallman3l@hao123.com","gender":"Male"},
{"id":131,"name":"Padriac Brimblecombe","email":"pbrimblecombe3m@freewebs.com","gender":"Male"},
{"id":132,"name":"Giovanni Philbin","email":"gphilbin3n@sogou.com","gender":"Male"},
{"id":133,"name":"Kalindi Noods","email":"knoods3o@slideshare.net","gender":"Female"},
{"id":134,"name":"Hall Strickler","email":"hstrickler3p@imageshack.us","gender":"Male"},
{"id":135,"name":"Far Ipsley","email":"fipsley3q@cmu.edu","gender":"Male"},
{"id":136,"name":"Joey Hinder","email":"jhinder3r@constantcontact.com","gender":"Genderfluid"},
{"id":137,"name":"Mei Sisnett","email":"msisnett3s@slideshare.net","gender":"Female"},
{"id":138,"name":"Dorothee Ranfield","email":"dranfield3t@webmd.com","gender":"Female"},
{"id":139,"name":"Marlo Kurten","email":"mkurten3u@people.com.cn","gender":"Male"},
{"id":140,"name":"Clevey Brunsden","email":"cbrunsden3v@mozilla.com","gender":"Male"},
{"id":141,"name":"Marvin Nani","email":"mnani3w@flavors.me","gender":"Male"},
{"id":142,"name":"Sayre Perin","email":"sperin3x@intel.com","gender":"Genderqueer"},
{"id":143,"name":"Boycie Aleshkov","email":"baleshkov3y@yellowbook.com","gender":"Male"},
{"id":144,"name":"Keriann Warsop","email":"kwarsop3z@jalbum.net","gender":"Female"},
{"id":145,"name":"Dale Fairbourne","email":"dfairbourne40@soup.io","gender":"Male"},
{"id":146,"name":"Elton Deyenhardt","email":"edeyenhardt41@netscape.com","gender":"Male"},
{"id":147,"name":"Atlanta Pattlel","email":"apattlel42@upenn.edu","gender":"Female"},
{"id":148,"name":"Myer MacKeogh","email":"mmackeogh43@soundcloud.com","gender":"Male"},
{"id":149,"name":"Marci Luebbert","email":"mluebbert44@si.edu","gender":"Female"},
{"id":150,"name":"Byrle Baxendale","email":"bbaxendale45@yolasite.com","gender":"Male"},]

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