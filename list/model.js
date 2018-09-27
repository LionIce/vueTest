const mysql=require('mysql');

const conn=mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'mydb'
})
conn.connect(function(err){
    if(err){
      console.log('---:'+err);
      return;
    }
    console.log('连接succeed');
});
module.exports=conn;