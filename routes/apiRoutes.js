const apiRoutes = require('express').Router()
const fs = require('fs')
const generateUniqueId = require('generate-unique-id')

apiRoutes.get('/', (req, res) => {
    console.info(`${req.method} request received for apiRoutes`);
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).json('Error in posting note to api');
        return;
      }
      let notes = JSON.parse(data);
      return res.json(notes);
    })
  });
  
  // POST api/notes
  apiRoutes.post('/', (req, res) => {
    console.info(`${req.method} request received to add a note to apiRoutes`)
    const { title, text } = req.body;
    if (title && text) {
      const newNote = {
        title,
        text,
        id: generateUniqueId(),
      };
      fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          res.status(500).json('Error in posting note to api');
          return;
        }
        let notes = JSON.parse(data);
        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
          if (err) {
            console.error(err);
            res.status(500).json('Error in posting note to api');
            return;
          }
          console.log(`Note for ${newNote.title} has been written to JSON file`);
          fs.readFile('./db/db.json', 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              res.status(500).json('Error in posting note to api');
              return;
            }
            let notes = JSON.parse(data);
            return res.json(notes);
          })
          })
      })
    } else {
      res.status(500).json('Error in posting note');
    }
  })
// delete()  /api/notes/:id
apiRoutes.delete('/:id', (req, res) => {
  console.info(`${req.method} request received to delete note`)

    const noteId = req.params.id
    console.log(noteId)

    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err){
        console.error(err);
        res.status(500).json({error: 'Internal server error'});
        return;
      }
      
      let notes = JSON.parse(data);
      notes = notes.filter(note => note.id !== noteId);

      fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'Internal server error' });
          return;
        }
        res.json({ message: 'Note deleted successfully' });
      });
    });
})

module.exports = apiRoutes

// to DRY code, not repeat
