let Users = [
{"id":51,"name":"Lizette Tuberfield","email":"ltuberfield1e@oaic.gov.au","gender":"Female"},
{"id":52,"name":"Natal Rubinshtein","email":"nrubinshtein1f@chronoengine.com","gender":"Male"},
{"id":53,"name":"Wynny Chessil","email":"wchessil1g@fotki.com","gender":"Female"},
{"id":54,"name":"Izzy Rickett","email":"irickett1h@wix.com","gender":"Male"},
{"id":55,"name":"Happy MacGaughey","email":"hmacgaughey1i@cnbc.com","gender":"Female"},
{"id":56,"name":"Constantia Mateja","email":"cmateja1j@netscape.com","gender":"Female"},
{"id":57,"name":"Genevieve Cossington","email":"gcossington1k@nytimes.com","gender":"Female"},
{"id":58,"name":"Bastien Chipping","email":"bchipping1l@pagesperso-orange.fr","gender":"Male"},
{"id":59,"name":"Avrom Furzey","email":"afurzey1m@bluehost.com","gender":"Male"},
{"id":60,"name":"Abby Gwilliam","email":"agwilliam1n@a8.net","gender":"Female"},
{"id":61,"name":"Boyce Firpi","email":"bfirpi1o@google.co.uk","gender":"Male"},
{"id":62,"name":"Norby Anstice","email":"nanstice1p@spiegel.de","gender":"Male"},
{"id":63,"name":"Matthiew Murrey","email":"mmurrey1q@wired.com","gender":"Male"},
{"id":64,"name":"Alva Seer","email":"aseer1r@nasa.gov","gender":"Male"},
{"id":65,"name":"Belle Catton","email":"bcatton1s@163.com","gender":"Female"},
{"id":66,"name":"Nelson Stittle","email":"nstittle1t@squidoo.com","gender":"Male"},
{"id":67,"name":"Borden Eymor","email":"beymor1u@cyberchimps.com","gender":"Male"},
{"id":68,"name":"Kipp Galler","email":"kgaller1v@biglobe.ne.jp","gender":"Male"},
{"id":69,"name":"Odetta Rimell","email":"orimell1w@google.ca","gender":"Female"},
{"id":70,"name":"Buffy Dabs","email":"bdabs1x@lycos.com","gender":"Female"},
{"id":71,"name":"Dorree Janota","email":"djanota1y@disqus.com","gender":"Female"},
{"id":72,"name":"Maison Crutchley","email":"mcrutchley1z@state.gov","gender":"Male"},
{"id":73,"name":"Derwin Penhall","email":"dpenhall20@issuu.com","gender":"Male"},
{"id":74,"name":"Lorraine Dupree","email":"ldupree21@canalblog.com","gender":"Female"},
{"id":75,"name":"Carroll Gason","email":"cgason22@marriott.com","gender":"Male"},
{"id":76,"name":"Wilek Nuschke","email":"wnuschke23@twitter.com","gender":"Male"},
{"id":77,"name":"Giraldo Ibbetson","email":"gibbetson24@china.com.cn","gender":"Male"},
{"id":78,"name":"Deanne Riddoch","email":"driddoch25@bbb.org","gender":"Female"},
{"id":79,"name":"Geneva Ancliffe","email":"gancliffe26@yandex.ru","gender":"Female"},
{"id":80,"name":"Joy Leidl","email":"jleidl27@tinyurl.com","gender":"Female"},
{"id":81,"name":"El Baum","email":"ebaum28@berkeley.edu","gender":"Male"},
{"id":82,"name":"Pepita Binny","email":"pbinny29@addtoany.com","gender":"Female"},
{"id":83,"name":"Brigg Yegorovnin","email":"byegorovnin2a@kickstarter.com","gender":"Male"},
{"id":84,"name":"Ferd Ranns","email":"franns2b@google.de","gender":"Male"},
{"id":85,"name":"Tracey Bedin","email":"tbedin2c@buzzfeed.com","gender":"Female"},
{"id":86,"name":"Lem Orpin","email":"lorpin2d@usatoday.com","gender":"Male"},
{"id":87,"name":"Dulsea Fey","email":"dfey2e@nasa.gov","gender":"Bigender"},
{"id":88,"name":"Elset Issacoff","email":"eissacoff2f@fc2.com","gender":"Female"},
{"id":89,"name":"Gregorio Crinage","email":"gcrinage2g@histats.com","gender":"Male"},
{"id":90,"name":"Vyky Cottesford","email":"vcottesford2h@ox.ac.uk","gender":"Female"},
{"id":91,"name":"Sly MacNamara","email":"smacnamara2i@cafepress.com","gender":"Genderqueer"},
{"id":92,"name":"Jacquelin Beller","email":"jbeller2j@miitbeian.gov.cn","gender":"Female"},
{"id":93,"name":"Harley Pergens","email":"hpergens2k@51.la","gender":"Female"},
{"id":94,"name":"Arnoldo Stanlake","email":"astanlake2l@abc.net.au","gender":"Male"},
{"id":95,"name":"Suzanne Rudkin","email":"srudkin2m@shinystat.com","gender":"Female"},
{"id":96,"name":"Ariel Kippling","email":"akippling2n@tumblr.com","gender":"Genderfluid"},
{"id":97,"name":"Ansley Bleything","email":"ableything2o@nytimes.com","gender":"Female"},
{"id":98,"name":"Prent Blazevic","email":"pblazevic2p@ox.ac.uk","gender":"Male"},
{"id":99,"name":"Culver Iacoboni","email":"ciacoboni2q@oracle.com","gender":"Male"},
{"id":100,"name":"Enriqueta Crutchfield","email":"ecrutchfield2r@google.com.au","gender":"Female"},]

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