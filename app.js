const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;
var command = argv._[0];

console.log('Command: ',command);

if (command === 'add') {
    console.log('Adding new note\n');
    var note = notes.addNote(argv.title, argv.body);
    if (note)
        console.log('note added');
    else
        console.log("title already there");

} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
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