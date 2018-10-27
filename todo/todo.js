const fs = require('fs');
let listTodo = [];

const saveDB = () =>{

  let data = JSON.stringify(listTodo);

  fs.writeFile('db/data.json', data, (err) => {
    if(err) throw new Error('Error saving in DB');
  });
}

const loadDB = () =>{
  try {
  listTodo = require('../db/data.json');
  } catch (e) {
    //si hay error muestra un arreglo vacio
    listTodo = [];
  }
}

//agregar tarea nueva
const addtask = (description) => {
//antes de hacer push cargamos informacion de DB
  loadDB();
  let toDo = {
    description,
    complete: false
  };

  listTodo.push(toDo);
  saveDB();
//Solo retornamos la tarea creada
  return toDo;
}

//listar tareas
const getList = () => {
loadDB();
return listTodo;
}

//actualizar tareas
const updatetask = (description, complete = true) => {
  loadDB();
  let index = listTodo.findIndex(task => task.description == description);
console.log(index);
  if( index >= 0) {
    listTodo[index].complete = complete;
    saveDB();
    return true;
  } else{
    return false;
  }
}

const deletetask = (description) => {
  loadDB();
  let newList = listTodo.filter(task =>  task.description !== description);

  if(listTodo.length === newList.length){
    return false;
  } else{
    listTodo = newList;
    saveDB();

    return true;
  }
}




module.exports = {
  addtask,
  getList,
  updatetask,
  deletetask
}
