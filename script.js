var a=document.querySelectorAll('.main1');
a.forEach(b => b.addEventListener('click',toogletext));
a.forEach(b => b.addEventListener('click',tooglemenu));
function toogletext(){
    this.classList.toggle('active');
}
function tooglemenu(){
    this.classList.toggle('open');
}