// Create Server
const express = require("express")
const mongoose = require("mongoose")
const articleRouter = require('./routes/articles')
const app = express();

mongoose.connect('mongodb://localhost/blog', { 
    useNewUrlParser: true,
 })

// view enginw will convert ejs code to HTML
app.set('view engine', 'ejs')

app.use('/articles', articleRouter)
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test description'
    }]
    res.render('articles/index', { articles: articles})
});

app.listen(5000)