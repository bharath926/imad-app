var button=document.getElementById('�ounter');
var counter=0;

button.onclick= function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystate===XMLHttpRequest.DONE){
            if(request.status===200){
                counter=counter+1;
                var counter=request.responseText;
                var span=document.getElementById('count');
                  span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://polisettybharath7.imad.hasura-app.io/counter',true);
    request.send(null);
};
