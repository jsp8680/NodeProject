const express = require('express');
var database = require('./database.js');

const app = express();

const port = 3000

app.set('views','.views');
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/all', (req, res) => {
  res.send(database);
})

app.get('/', (req, res) => {
res.render('home.ejs');

})


app.post('/:id', (req, res) => {
res.send(database);
})


app.get('/:id', function (req, res) {
if(!database.find(database => database.id === req.params.id)){

res.status(404);
res.render('index.ejs');

}

else{
    res.send(database.find(database => database.id === req.params.id));
}
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})