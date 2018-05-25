var addNote = (title, body) => {
    console.log(`Title: ${title}\n Message: ${body}\n`);
};

var getAll = () => {
    console.log('Getting all notes');
};

var getNote = (title) => {
    console.log(`Reading note: ${title}\n`);
};

var removeNote = (title) => {
    console.log(`Removing note: ${title}\n`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}