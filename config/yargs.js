const argv = require ('yargs')
              .command('addtask', 'add new task', {
                description: {
                  demand: true,
                  alias: 'd',
                  desc: 'task description'
                }
              })
              .command('updatetask', 'update task', {
                description: {
                  demand: true,
                  alias: 'd',
                  desc: 'task description'
                },
                complete:{
                  default: true,
                  alias: 'c',
                  desc: 'task completed'
                }
              })
              .command('deletetask', 'delete task', {
                description: {
                  demand: true,
                  alias: 'd',
                  desc: 'delete a task'
                }
              })
              .help()
              .argv;
module.exports = {
  argv
}
