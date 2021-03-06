var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
    title:'article-one',
    heading:'article-one',
    date:'aug9,2017',
    content:` <p>tis is first article.tis is first article.tis is first article.tis is first articletis is first articletis is first articletis is first articletis is first articletis is first article.tis is first articletis is first articletis is first articletis is first articletis is first articletis is first articletis is first article.
        </p>`
},
    'article-two':{
        title:'article-two',
    heading:'article-two',
    date:'aug11,2017',
    content:` <p>tis is two article.
        </p>`
    },
    'article-three':{
        title:'article-three',
    heading:'article-three',
    date:'aug10,2017',
    content:` <p>tis is three article.
        </p>`
    }
};
function createtemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;

var htmltemplate=`
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="width=device-width,intial=scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />

    </head>
<body>
    <div class="container">
<div>
    <a href="/">HOME</a>
    <hr/>
    </div>
    <div>
        <h3>${heading}</h3>
    </div>
    <div>${date}</div>
    <div>
        ${content}
    </div>
        </div>
</body>
</html>
`;
return htmltemplate;
}


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});
app.get('/:articlename', function(req, res){
    var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function  (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
