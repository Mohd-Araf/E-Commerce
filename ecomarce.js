const header = document.querySelectorAll("header");
window.addEventListener("scroll",function(){
    header.classlist.toggle("stickey", this.window.scrollay>0);

})
let menu = document.querySelectorA('#menu-icon');
let nev = document.querySelectorA('.nev-menu');
logo.onclick = () =>{
    menu.classlist.toggle('bx-x');
    nev.classlist.toggle('open');
    

}