var express=require('express');
var requestLangauge=require('express-request-language');
var cookieParser=require('cookie-parser');

var ip=require('ip');
var os=require('os');
var app=express();



app.use(cookieParser());
//Created a cookie using middleware
app.use(requestLangauge({
  languages:['en-US','zh-CH','zh-TW','en-GB','en-IN'],
  cookie:{
    name:'langauge',
    options:{maxAge:24*3600*1000},
    url:'languages/{language}'
  }
}));
app.get('/api/whoami/',function(req,res){


/* Used for testing
console.log(ip.address());
console.log(req.language);
console.log(os.type());*/
res.json({
  unix:ip.address(),
  language:req.language,
  operating_system:os.type()
});
})
app.listen(3000,function(req,res){
  console.log("Local Port running on 3000");




});
