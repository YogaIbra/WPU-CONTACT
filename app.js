const express = require('express');
const app = express();
const port = 3000;
const expressLayouts = require('express-ejs-layouts');
const {loadContact, findContact} = require('./contacts')

//set middelware
app.set('view engine', 'ejs')
app.use(expressLayouts);
app.use(express.static('public'))

app.get('/',(req, res) => {
    const siswa = [
        {
            nama : "Yoga",
            kelas : "XII MIPA 4",
            absen : "36",
        },
        {
            nama : "Ibra",
            kelas : "XII MIPA 4",
            absen : "26",
        }
    ]
    res.render('index', {
        title : "halaman awal",
        layout : 'layout/main-layout',
        siswa,
    })
})

app.get('/about',(req, res) => {
    res.render('about', {
      title : "about",
      layout : 'layout/main-layout',
    })
})

app.get('/contact',(req, res) => {
    const contact = loadContact()
    res.render('contact', {
        title : "contact",
        layout : 'layout/main-layout',
        contact
    })
})

app.get('/contact/:nama', (req, res) => {
    const name = req.params.nama
    const contact = findContact(name)
    res.render('detail', {
        title : "detail",
        layout : 'layout/main-layout',
        contact,
    })
})

app.use('/', (req, res) =>{
    res.status(404)
    res.send('404')
})


//port 
app.listen(port, ()=>{
    console.log(`local hosting berjalan di ${port}`)
})