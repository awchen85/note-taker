const path = require('path');
const fs = require('fs');

//Find note in array by id
function findById(id, notesArray) {
  const result = notesArray.filter((note) => note.id === id)[0];
  return result;
}

// Create a new note and return all notes in a new array
function createNewNote(body, notesArray) {
  notesArray.push(body);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return body;
}

//Remove notes by splice and return a new array of notes
function removeNote(note, notesArray) {
  const index = notesArray.indexOf(note);
  notesArray.splice(index, 1);

  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return notesArray;
}

module.exports = { findById, removeNote, createNewNote };