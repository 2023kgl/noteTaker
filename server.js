const express = require('express');
const app = express();
const path = require('path')
const api = require('./public/routes/index.js')
const PORT = process.env.PORT || 3001

app.use(express.static('public')) 
app.use(express.urlencoded({extended: true})) 
app.use(express.json()) 
app.use('/api', api)

app.get('/notes', (req,res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"))  // HTML ROUTE
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html')) // HTML ROUTE
});

app.listen(PORT, () =>
  console.log(`Server started on port http://localhost:${PORT}`)
);