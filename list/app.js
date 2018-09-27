const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','ejs');
app.set('views','./views');

app.use('/node_modules',express.static('./node_modules'));
app.use('/assets',express.static('./assets'));
app.use('/controller',express.static('./controller'));
app.use('/router',express.static('./router'));
app.use('/views',express.static('./views'));

const router=require('./router/router.js');
app.use(router);

app.listen(3000,()=>{
    console.log('running on http://127.0.0.1:3000');
})