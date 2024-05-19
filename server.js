const express = require('express');
const path = require ('path');

// INTIALIZE EXPRESS AND CALL IT - ALLOWS ACCESS TO ALL EXPRESS METHODS 
const app = express();

const PORT = 3001;
app.listen(PORT, () =>
    console.log(`Server started on port http://localhost:${PORT}`)
  );

// SERVE STATIC FILES - middleware, handle data before it is sent out - what files we want as our root path
// anyting within the public folder is where it's being served from
// static - files that are already built in html
app.use(express.static('public'))

// gather data / is home address and catch all
// route for default '/', '/send' and '/routes' endpoints
// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))

)

// route handler - endpoint
// When a GET request is made to the "/paths" endpoint, Express will respond by sending the "notes.html" file back to the client.
app.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})
