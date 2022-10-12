const router = require('express').Router();
const { notes } = require("../../db/db.json");
const { findById, removeNote, createNewNote } = require("../../lib/notes");
const uuid = require('uuid');


//Get notes from array
router.get('/notes', (req, res) => {
    res.json(notes);
});

//Get notes and send error
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

//Create a note and give a unique ID
router.post("/notes", (req, res) => {
    req.body.id = uuid.v4();
    const note = createNewNote(req.body, notes);
    res.json(note);
})

//remove notes by ID
router.delete('/notes/:id', (req, res) => {
    const note = findById(req.params.id, notes);
    removeNote(note, notes);
    res.json();
});

module.exports = router;