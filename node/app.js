var http=require("http");
var _=require("lodash");
var myFun=require("./myFun.js")

http.createServer(function(request,response){
	
	var devRe=_.uniq([2, 1, 2]);
	var valret= myFun.sumFun(5,12);
	var divFuns= myFun.divFun(12,3);
	
	response.write('hello dev');
	console.log(divFuns);
	response.end();
}).listen("3131");

console.log("Server is up on 3131");
