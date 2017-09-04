console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='this is another proces of figure';
var img=document.getElementById('madi');
marginLeft=0;
function moveLeft(){
    marginRight=marginRight+1;
    img.style.marginRight=marginRight+'px';
}
img.onclick=function(){
    var interval=setInterval(moveLeft,50);
};