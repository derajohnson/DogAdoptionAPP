let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

//APP CONFIG
mongoose.connect('mongodb://localhost:27017/companion_app', {useNewUrlParser: true});

app.set('view engine','ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE/MODEL CONFIG
let dogSchema = new mongoose.Schema({
    image: String,
    name: String,
    gender: String,
    breed: String,
    body: String
})

let Dog = mongoose.model('Dog', dogSchema);



//RESTFUL ROUTES
app.get('/', (req, res) => {
    res.redirect('/dogs')
})

app.get('/dogs', (req, res) =>{
    Dog.find({}, (err, dogs) => {
        if(err){
            console.log('ERROR!')
        }else{
            res.render('index', {dogs: dogs})
        }
    })
})

//SHOW ROUTES
app.get('/dogs/:id', (req, res) => {
    Dog.findById(req.params.id, (err, foundDog) => {
        if(err){
            console.log('ERROR')
        }else{
            res.render('show', {dog: foundDog})
        }
    })
})

app.get('/dogs/:id/adopt', (req, res) => {
    Dog.findById(req.params.id, (err, foundDog) => {
        if(err){
            res.redirect('/dogs')
        }else{
            res.render('adopt', {dog: foundDog})
        }
    })
})

app.get('/dogs/:id/page', (req, res) => {
    Dog.findById(req.params.id, (err, foundDog) => {
        if(err){
            res.redirect('/dogs/:id/adopt')
        }else{
            res.render('page', {dog: foundDog})
        }
    })
})

app.listen(3000, () => {
    console.log('SERVER IS RUNNING')
})