const express = require('express')
const app= express();
// hier schauen wir ob es eine Variable PORT bei Heroku / in unserer process.env gibt. Ansonsten nehmen wir den festen Port! (In diesem Fall 5000)
const PORT = process.env.PORT || 5000

//nächste Änderung in der package.json! 
//Wir fügen in unserer package.json den Befehl hinzu, mit dem wir den Server starten wollen: 
//"scripts": {"start": "node index.js"}

//heroku login
//im Browser einloggen
// --> console zeigt deine emailadresse
// heroku create
// erstellt ein neues Heroku Projekt

app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/',(req,res) => {
res.render('index')
})

app.listen(PORT,() =>  console.log(`ttp://localhost:${PORT}`))