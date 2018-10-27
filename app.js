// const argv = require('yargs').argv;
const argv = require ('./config/yargs').argv;
const colors = require('colors');
const todo = require('./todo/todo');
console.log(argv);

let comando = argv._[0];

switch(comando) {

  case 'addtask':
    let task = todo.addtask(argv.description);
    console.log(task);
  break;

  case 'showlist':
  let list = todo.getList();

  for (let task of list) {
    console.log("--------To Do---------".green);
    console.log(task.description);
    console.log("Estado:" , task.complete);
    console.log("-----------------".green);
  }
  break;

  case 'updatetask':
    let updated = todo.updatetask(argv.description, argv.complete);
    console.log(updated);
  break;

  case 'deletetask':
    let deleted = todo.deletetask(argv.description);
    console.log(deleted);
  break;

  default:
    console.log('Comando no reconocido');

}
