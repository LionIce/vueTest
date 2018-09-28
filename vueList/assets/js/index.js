$(function(){
    axios.get('/users').then(function(results){
        console.log(results);
    })
})