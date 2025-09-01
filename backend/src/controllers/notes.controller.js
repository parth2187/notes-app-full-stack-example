const fs = require('fs');

const NOTE_FILE = 'notes.json';

function readNotes() {
    if (fs.existsSync(NOTE_FILE)) {
        return JSON.parse(fs.readFileSync(NOTE_FILE, 'utf-8'));
    }
    return [];
}

exports.getNotes = (req,res) => {
    const notes = readNotes();
    res.status(200).json(notes);
}

exports.addNotes = (req,res) => {
    const notes = readNotes();
    const newNote = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content
    };
    notes.push(newNote);
    fs.writeFileSync(NOTE_FILE, JSON.stringify(notes, null, 2));
    res.status(201).json({message: 'Success', note: newNote});
}

exports.getNoteById = (req, res) => {
    const notes = readNotes();
    const note = notes.find( n => n.id === parseInt(req.params.id));

    if(note) {
        res.status(200).json(note);
    } else {
        res.status(404).json({error: 'Note Found'});
    }
};

exports.deleteNote = (req, res) => {
    let notes = readNotes();
    const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
    if(noteIndex !== -1){
        notes.splice(noteIndex,1);
        fs.writeFileSync(NOTE_FILE, JSON.stringify(notes, null, 2));
        res.status(200).json({ message: 'Note Deleted'});
    } else {
        res.status(404).json({error:'Note not found'});
    }
};