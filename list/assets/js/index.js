$(function(){
    $('#form').on('submit',function(e){
        e.preventDefault();

        axios.post('/addUser',$('#form').serialize()).then(results=>{
            console.log(results);
        }).catch(function(){
            console.log(err);
        })
    })

    axios.get('/users').then(function(results){
        if(results.status===200&&results.data.err_code===0){
            const htmlStr=template('tmpl',results.data);
            $('tbody').html(htmlStr);
        }
    }).catch(function(err){
        console.log(err);
    })
})