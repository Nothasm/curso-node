const yargs = require('yargs');
const notes = require('./notes.js');
const argv = yargs.argv;
var command = argv['_'][0];

console.log('Command: ',command);

if (command === 'add') {
    console.log('Adding new note\n');
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll
} else if (command === 'read') {
    console.log('Reading note');
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command invalid');
}
// console.log(argv);
// console.log(process.argv);