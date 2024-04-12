let express = require('express')
let router = express.Router()
let blogs = require('../data/blogs')

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/index.html'))
    res.render('home')
})

router.get('/blog', (req, res) => {
    // res.sendFile(path.join(__dirname, '../templates/bloghome.html'))
    res.render('bloghome')
})

router.get('/blogpost/:slug', (req, res) => {
    let Myblogs = blogs.filter(e => {
        return ( 
            e.slug == req.params.slug
        )
    })
    // console.log(Myblogs);
    // res.sendFile(path.join(__dirname, '../templates/blogpage.html'))
    res.render('blogpage')
})

module.exports = router