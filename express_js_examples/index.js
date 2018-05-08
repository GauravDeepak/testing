var express = require('express')
var app = express()
var path = require('path')
// static file in the project
// app.use(express.static('public'))


// for virtual directory in project folder
app.use('/file/static',express.static('public'))


app.get('/',(req,res)=>{
    res.redirect('http://google.com');
})
app.get('/user',(req,res) =>{
    console.log(res.route)
})

app.listen(4000,() =>{
    console.log("server is running")
})