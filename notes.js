const fs = require('fs');

var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('data.json'));
    } catch(e) { 
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var dupe = notes.filter((note) => {
        return note.title === title;
    });

    if (!dupe.length) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log(`Reading note: ${title}\n`);
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var newArray = notes.filter((note) => {
        return note.title !== title;
    });

    saveNotes(newArray);
    if(notes.length > newArray.length)
        return true;
    return false;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}