require('dotenv').config()

const express = require('express')
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts')
const connectDB = require('./server/config/db')
const session = require('express-session')
const passport = require('passport')
const MongoStore = require('connect-mongo')

const app = express()
const port = 5000|| process.env.PORT

app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized:true,
    store: MongoStore.create({
        mongoUrl : 'mongodb://localhost:27017/NotesApp'
    })
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method'))

connectDB()

app.use(express.static('public'))

app.use(expressLayouts)
app.set('layout','./layouts/main')
app.set('view engine','ejs')

app.use('/',require('./server/routes/auth'))
app.use('/',require('./server/routes/index'))
app.use('/',require('./server/routes/dashboard'))

app.get('*',(req,res)=>{
    res.status(404).render('404')
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})

