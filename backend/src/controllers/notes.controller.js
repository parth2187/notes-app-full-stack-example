const fs = require('fs');

const NOTE_FILE = 'notes.json';
const Note = require('../models/notes.model');
const { errorMonitor } = require('events');

function readNotes() {
    if (fs.existsSync(NOTE_FILE)) {
        return JSON.parse(fs.readFileSync(NOTE_FILE, 'utf-8'));
    }
    return [];
}

exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find(); 
    res.status(200).json(notes);      
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// exports.addNotes = (req,res) => {
//     const notes = readNotes();
//     const newNote = {
//         id: Date.now(),
//         title: req.body.title,
//         content: req.body.content
//     };
//     notes.push(newNote);
//     fs.writeFileSync(NOTE_FILE, JSON.stringify(notes, null, 2));
//     res.status(201).json({message: 'Success', note: newNote});
// }

exports.addNotes = async (req, res) => {
    try {
        const {title,content} = req.body;

        const newNote = new Note({
            title,
            content
        });

        await newNote.save();
        res.status(201).json({message: 'Success', note: newNote});
    } catch (err) {
        res.status(500).json({error: 'Failed to create note', details: err.message});
    }
};

// exports.getNoteById = (req, res) => {
//     const notes = readNotes();
//     const note = notes.find( n => n.id === parseInt(req.params.id));

//     if(note) {
//         res.status(200).json(note);
//     } else {
//         res.status(404).json({error: 'Note Found'});
//     }
// };

exports.getNoteById = async (req,res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (note) {
            res.status(200).json(note);
        } else {
            res.status(404).json({error: 'Note not found '});
        }
    } catch(err) {
        res.status(500).json({error: 'Failed to fetch note', details: err.message});
    }
}

// exports.deleteNote = (req, res) => {
//     let notes = readNotes();
//     const noteIndex = notes.findIndex(n => n.id === parseInt(req.params.id));
//     if(noteIndex !== -1){
//         notes.splice(noteIndex,1);
//         fs.writeFileSync(NOTE_FILE, JSON.stringify(notes, null, 2));
//         res.status(200).json({ message: 'Note Deleted'});
//     } else {
//         res.status(404).json({error:'Note not found'});
//     }
// };

exports.deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if(deletedNote){
            res.status(200).json({message: 'Note deleted'});
        } else {
            res.status(404).json({error: 'Note not found '});
        }
    } catch (err) {
        res.status(500).json({error: 'Failed to delete note', details: err.message});
    }
};