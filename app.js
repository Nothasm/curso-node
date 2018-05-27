const yargs = require('yargs');
const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
  };
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
  };

const argv = yargs
    .command('add', 'Add a new note', {
      title: titleOptions,
      body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
      title: titleOptions,
    })
    .command('remove', 'Remove a note', {
      title: titleOptions
    })
    .help()
    .argv;

var command = argv._[0];

if (command === 'add') {

    console.log('Adding new note\n');
    var note = notes.addNote(argv.title, argv.body);
    if (note)
        console.log('note added');
    else
        console.log("title already there");

} else if (command === 'list') {

    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} notes\n`);
    allNotes.forEach((note) => notes.logNote(note));

} else if (command === 'read') {

    var note = notes.getNote(argv.title);
    if(note){
        notes.logNote(note);
    } else
        console.log('note not found');

} else if (command === 'remove') {

    if(notes.removeNote(argv.title))
        console.log('Removed');
    else 
        console.log('not removed');

} else {

    console.log('Command invalid');

}
// console.log(argv);
// console.log(process.argv);