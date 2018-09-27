const express=require('express');
const router=express.Router();

const conn=require('../model.js');
const moment=require('moment');

router.get('/',(req,res)=>{
    res.render('../views/index.ejs');
    // const sqlStr='select * from list where isdel=0';
})
router.get('/users',(req,res)=>{
    const sqlStr='select * from list where isdel=0 order by id asc';
    conn.query(sqlStr,(err,results)=>{
        if(err) return res.json({err_code:1,message:'获取参数失败',affectedRows:0});
        res.json({err_code:0,message:results,affectedRows:0});
    })
})

router.post('/addUser',(req,res)=>{
    req.body.ctime=moment().format('YYYY-MM-DD HH:mm:ss');
    conn.query('insert into list set ?',req.body,(err,results)=>{
        if(err) return res.json({err_code:1,message:'添加失败',affectedRows:0});
        if(results.affectedRows!==1) return res.json({err_code:1,message:'添加失败',affectedRows:0});
        res.json({err_code:0,message:'添加成功',affectedRows:1})
    })
})

module.exports=router;