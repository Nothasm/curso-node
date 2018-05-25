var addNote = (title, body) => {
    console.log(`Title: ${title}\n Message: ${body}\n`);
};

var getAll = () => {
    console.log('Getting all notes');
};

module.exports = {
    addNote,
    getAll
}