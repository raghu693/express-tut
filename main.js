let express = require('express')
let {engine} = require('express-handlebars')
let path = require('path')
let app = express()
let port = 3000

app.use('/', require(path.join(__dirname, 'routes/blog.js')))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


app.listen(port, ()=>{
    console.log(`the app is running on http://localhost:${port}`)
})
