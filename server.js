const express = require('express');
const fs = require('fs');
const path = require('path');


// initialize the express ap
const app = express();
const PORT = 3000;

// middleware
app.use(express.static('public'));
app.use(express.json());

// Data
const notes = JSON.parse(fs.readFileSync(path.join(__dirname, '/db/db.json'), 'utf8'));


// Routes

// API routes
app.get('/api/notes', (req, res) => {
    res.json(notes)
    
})



app.post('/api/notes', (req, res) => {
    const newNotes = req.body;
    newNotes.id = Date.now();

   

    notes.push(newNotes);
    fs.writeFileSync(path.join(__dirname, '/db/db.json'),JSON.stringify(notes));
    res.json(newNotes);
})

app.delete('/api/notes/:id', (req,res) => {
    const noteIndex = notes.findIndex(n=> n.id === parseInt(req.params.id));
    notes.splice(noteIndex, 1);
    fs.writeFileSync(path.join(__dirname, '/db/db.json'),JSON.stringify(notes));
    res.json(notes);

})




// HTML Routes
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));  
})

// make the app start listening/running
app.listen(PORT, () => {
    console.log ('listening to port ' + PORT)
})