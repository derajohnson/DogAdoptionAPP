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

Dog.create({
    image: 'https://images.unsplash.com/photo-1457914109735-ce8aba3b7a79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Buster',
    gender: 'Male',
    breed: 'Syberian Husky',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar quam eu neque gravida, non aliquet dolor condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In rutrum mollis felis quis euismod. Etiam scelerisque fermentum ullamcorper. Cras ligula leo, luctus a consequat vitae, consectetur et dolor. In hac habitasse platea dictumst. Fusce placerat enim eu varius viverra. Fusce suscipit, urna quis elementum dapibus, justo nisl placerat velit, vel aliquet ex nulla vitae lorem. Aliquam et erat ligula. Curabitur sagittis nisi diam, ut feugiat urna ornare id. Quisque molestie ipsum orci, finibus facilisis mauris iaculis non. Nulla elementum lacinia sapien, sed tempus enim pellentesque sed. Donec id commodo odio.'
})

Dog.create({
    image: 'https://images.unsplash.com/photo-1494870363241-b5225be3dada?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Honey',
    gender: 'Female',
    breed: 'German Shepherd',
    body: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus eu ipsum eu erat efficitur malesuada. Nam luctus sit amet enim eget tincidunt. In vehicula turpis non arcu tempor fermentum eget in leo. Vestibulum pulvinar justo consectetur odio facilisis, eu condimentum augue dictum. Praesent venenatis suscipit rhoncus. Pellentesque viverra volutpat rhoncus. Etiam tempor ipsum quis leo pretium vulputate. Nunc ut malesuada dui, accumsan commodo mauris. Donec eu porttitor massa, in varius urna. Vestibulum blandit odio non justo finibus molestie. Sed in nibh eget purus pulvinar scelerisque."
})

Dog.create({
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Rusty',
    gender: 'Male',
    breed: 'Mutt',
    body: "Nullam eleifend accumsan neque ac mattis. Duis molestie lacus non aliquam blandit. Etiam eleifend odio vel tempor ullamcorper. Nulla facilisi. Phasellus in dui nibh. Quisque molestie erat lacinia sapien semper laoreet. Mauris sed nisi non orci accumsan semper. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam tempor elit quis luctus tincidunt."
})

Dog.create({
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Lola',
    gender: 'Female',
    breed: 'White Shih Tzu',
    body: 'Fusce sed quam eget nisi pellentesque iaculis non sed risus. Quisque euismod tempor nibh, non dapibus justo dignissim at. Aenean libero lectus, congue in enim eu, viverra tempor dui. Phasellus gravida urna eu elit tempor, vitae tristique ligula interdum. Duis condimentum elit ac iaculis faucibus. Aliquam erat volutpat. In pellentesque, mi nec placerat lobortis, sapien enim pharetra ex, id auctor ipsum nisi sit amet metus. Aenean rutrum metus vitae elementum vulputate. Pellentesque fringilla justo felis, maximus blandit diam tincidunt quis. Nam iaculis, enim id lacinia commodo, tortor elit vestibulum est, a vehicula tortor justo a mauris. Nullam maximus est et ornare fermentum. Fusce egestas eget nibh sit amet venenatis. Cras posuere nec erat et scelerisque. Maecenas feugiat arcu a nulla iaculis, non eleifend mi suscipit.'
})

Dog.create({
    image: 'https://images.unsplash.com/photo-1502673530728-f79b4cab31b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Oliver',
    gender: 'Male',
    breed: 'Golden Retriver',
    body: 'Praesent at aliquam velit. Nulla a vestibulum mi, eget vehicula dui. Vivamus congue congue risus id ullamcorper. Sed fringilla consectetur dictum. Donec nisl lacus, elementum rhoncus mattis vitae, mattis sit amet nisi. Pellentesque congue massa augue, eget egestas sapien euismod in. In non fringilla elit.'
})

Dog.create({
    image: 'https://images.unsplash.com/photo-1446231855385-1d4b0f025248?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Coco',
    gender: 'Female',
    breed: 'Brown Chow Chow',
    body: 'Nullam a lacus lorem. Ut sollicitudin turpis vel venenatis tincidunt. Aenean hendrerit est scelerisque risus pulvinar, id bibendum nisl scelerisque. Suspendisse dictum elit libero, id ornare elit sagittis sed. Integer faucibus ligula massa, sed ultricies tellus faucibus sit amet. Proin ut maximus erat, sit amet condimentum lectus. Nunc id lacus gravida, cursus tellus at, maximus nisi. Vestibulum quis enim ac quam fermentum pulvinar aliquam ut erat. Vestibulum tincidunt convallis risus, sed lacinia massa interdumat. In rutrum sem sapien, nec lobortis risus mattis non. Phasellus dignissim cursus ipsum, vel malesuada quam fermentum eget. Proin vel elit eu purus pharetra auctor. Nullam pulvinar tristique arcu.'
})

Dog.create({
    image: 'https://images.unsplash.com/photo-1549291981-56d443d5e2a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'George',
    gender: 'Male',
    breed: 'Brown Labrador',
    body: 'Proin et ante a justo gravida mattis sit amet sit amet lacus. Duis luctus consequat enim, a finibus odio mollis eu. Integer interdum leo ut turpis rhoncus, commodo fringilla nisl pharetra. Duis ut ipsum quis nibh pretium sagittis quis tempus risus. Aliquam malesuada vulputate scelerisque. Suspendisse potenti. Cras ligula ligula, tempor et diam id, efficitur vehicula sem. Aenean bibendum elementum dui quis placerat. Aenean mollis orci a nunc luctus malesuada. Integer eleifend id metus at vestibulum. Mauris ultrices, est ut elementum efficitur, mauris justo tempus risus, vel accumsan urna mi sit amet purus.'
})

Dog.create({
    image: 'https://images.unsplash.com/photo-1513904178077-6c5730ddd446?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Lulu',
    gender: 'Female',
    breed: 'Poodle',
    body: 'Nunc tincidunt lacus quis iaculis laoreet. In hac habitasse platea dictumst. Integer aliquam nibh massa, in interdum justo ornare non. Curabitur pulvinar diam elit, eget luctus enim ornare eget. Aenean porta ut elit et tincidunt. Sed mollis ante lacus, vitae posuere neque feugiat ut. Aliquam aliquam mauris diam, a mollis ligula pharetra a. Aliquam erat volutpat. Duis felis risus, maximus in magna nec, varius vehicula neque. Pellentesque sit amet justo ante. Phasellus lobortis mi eu enim consequat convallis. Mauris bibendum feugiat mauris, vitae maximus nisl dictum eu. Donec egestas metus at luctus euismod. Cras vel pharetra tortor, eu vehicula velit.'
})

Dog.create({
    image: 'https://images.unsplash.com/photo-1455380579765-810023662ea2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Ralph',
    gender: 'Male',
    breed: 'Fawn',
    body: 'Nunc consectetur a risus sit amet dignissim. Nullam aliquam felis eu est porta, a faucibus magna aliquam. Ut vestibulum felis nunc, sit amet sodales leo iaculis vel. Suspendisse ultrices dui id consectetur consectetur. Pellentesque consequat sem quis odio cursus venenatis. Phasellus finibus quam mauris, id pulvinar orci vehicula sed. Ut laoreet, mauris non lacinia imperdiet, risus nisi gravida velit, sit amet porttitor mauris lacus a dolor. Nulla libero enim, posuere quis ligula nec, lobortis dignissim nisi. Etiam ut nulla sem. In eget elit dictum, lobortis ligula sed, porttitor tortor. Donec a leo eu enim lobortis hendrerit vitae non lacus. Vestibulum quis enim urna. Suspendisse potenti.'
})

Dog.create({
    image: 'https://images.unsplash.com/photo-1443806798002-651c462956ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Ellie',
    gender: 'Female',
    breed: 'Yorkshire Terrier',
    body: 'Donec et tellus dictum, lacinia lorem a, auctor dolor. Donec rutrum turpis vel metus pellentesque, ut interdum justo feugiat. In hac habitasse platea dictumst. Curabitur sed mi volutpat, egestas erat vel, suscipit velit. Donec consectetur id diam ac iaculis. Donec venenatis porttitor mattis. Donec nec orci libero. Nam elit nisl, euismod at erat nec, sodales mollis ex. Maecenas non volutpat magna.'
})
Dog.create({
    image: 'https://images.unsplash.com/photo-1551717743-49959800b1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Rex and Max',
    gender: 'Male',
    breed: 'White and Tan',
    body: 'Sed rutrum libero et risus tincidunt, a porta lectus ullamcorper. Donec nec arcu sed leo tempor dictum. Nam sed tempor lectus, nec pretium magna. Praesent a nisi at purus venenatis lobortis. Donec a mollis ante, id pharetra nibh. Cras sed risus eu augue tempor mollis viverra vel dolor. Nulla sollicitudin velit id nisi auctor, quis faucibus felis viverra. Maecenas faucibus quis massa quis vehicula. Duis gravida convallis tristique. Vivamus aliquam vulputate est ac pellentesque. Morbi eu tincidunt nunc, nec bibendum augue. Aliquam sollicitudin venenatis justo, eget blandit est tempor nec. Suspendisse laoreet, enim ac placerat laoreet, lacus ex rutrum libero, in posuere risus metus ut nisl. Sed pellentesque faucibus erat ac iaculis. Pellentesque pulvinar tempus nibh.'
})

Dog.create({
    image: 'https://images.unsplash.com/photo-1539078274334-d60031017381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    name: 'Cookie',
    gender: 'Female',
    breed: 'Yellow Labrador Retriever',
    body: 'Sed ornare sagittis lacus. Praesent venenatis luctus sapien eget lobortis. Donec congue varius nisi placerat molestie. Donec interdum mi eget justo eleifend ornare. Nam sit amet commodo enim, a blandit nunc. Praesent viverra, arcu et pharetra faucibus, elit massa dapibus leo, non vehicula magna nunc a tellus. In sit amet vehicula massa. Donec mollis ligula quis lacus condimentum feugiat. Nam rhoncus condimentum risus vitae ultrices. Cras eros ante, pharetra vel mollis eget, tristique nec mi. Nulla sodales, erat eget convallis pretium, ipsum dui congue metus, id auctor neque justo eu felis. Curabitur ac justo felis. Morbi faucibus augue ut est dapibus dapibus.'
})




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