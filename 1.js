const mysql=require('mysql');

//1.链接
//createConnection(哪台服务器，用户名，密码，库)
var db=mysql.createConnection({host:'localhost',user:'root',password:'root',database:'nodedemo'});

//2.查询
//query(干啥，回调函数)
db.query("select * from user;",(err,data)=>{
	if(err){
		console.log('出错了',err);
	}else{
		console.log('成功了');
		console.log(JSON.stringify(data));
	}
});