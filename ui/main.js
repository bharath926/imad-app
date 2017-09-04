var button=document.getElementById('çounter');
button.onclick= function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystate==XMLHttpRequest.DONE){
            if(request.status==200){
                var counter=request.response.Text;
                var span=document.getElementById('count');
                  span.innerHtml=counter.toString();
            }
        }
    };
    request.open('GET','http://http://polisettybharath7.imad.hasura-app.io/counter',true);
    request.send(null);
};