console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML='this is another proces of figure';
var img=document.getElementById('madi');
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
};