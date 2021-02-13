const express=require("express");
const bp=require("body-parser");
const https=require("https");
const server=express();
var fn;
var ln;
server.use(bp.urlencoded({extended:true}));
server.get("/",function(req,res)
{
  res.sendFile(__dirname +"/index.html");
});
server.post("/next",function(req,res)
{
  fn=req.body.fn;
  ln=req.body.ln;
  res.sendFile(__dirname +"/index1.html");
});
server.use(express.static("public"));
server.post("/",function(req,res){
  const email=req.body.email;
  const data={
    members:[
      {
        email_address: email,
        status: "subscribed",
        merge_fields:{
          FNAME: fn,
          LNAME: ln
        }
      }
    ]
  };
  var jsondata=JSON.stringify(data);
  const url= "https://us1.api.mailchimp.com/3.0/lists/fa82bb9690"
  const options={
    method:"POST",
    auth: "eeshan1:535b54fb5662f0f9f4042cff00d558fb-us1"
  };
  const request=https.request(url, options ,function(response){
    if(response.statusCode===200)
    {
      res.sendFile(__dirname+"/success.html")
    }
    else{
      res.sendFile(__dirname+"/failure.html")
    }
  response.on("data",function(data){
  });
});
  request.write(jsondata);
  request.end();
});
server.post("/fail",function(req,res){
  res.redirect("/");
})
server.listen(3000,function(){
  console.log("set");
});
//535b54fb5662f0f9f4042cff00d558fb-us1
