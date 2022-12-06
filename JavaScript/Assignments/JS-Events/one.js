/*function display(){
    document.getElementById(btn1).style.backgroundColor = 'red';     
}*/

const btn = document.getElementById('btn');

btn.addEventListener('dblclick', 
    function ondblclick() {
        btn.style.backgroundColor = 'orange';
        btn.style.color = 'white';
});





