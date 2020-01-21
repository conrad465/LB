const express = require("express");
const bodyPasrer = require("body-parser");
const JSON = require("JSON");
const requests = require("request");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const PORT = process.env.PORT || 8000;

var app = express();
app.use(bodyPasrer.urlencoded({extended: false}));
app.use(bodyPasrer.json());


console.log("server started on 8000");
app.listen(8000);

app.post('/main', (req, res)=>{
		//console.log("time query");
		//console.log(req.body); 
		var bot_id = "2fd6b85077d8298aa71ac2f2c3"

		let user = req.body.group_id;
		console.log(typeof(user));
		let body = "bot_id="+ bot_id +  "&text=The Lodge"
        
	
        let message = JSON.stringify(req.body).toLowerCase();
	    if(message.indexOf("section") !== -1){
      		let oReq = new XMLHttpRequest();
      		oReq.open("POST", "https://api.groupme.com/v3/bots/post?bot_id="+bot_id+"&text=*The Lodge",true);
      		//oReq.onload = function(){console.log(oReq.response);}
    		oReq.send(body);
	    }


		
});
