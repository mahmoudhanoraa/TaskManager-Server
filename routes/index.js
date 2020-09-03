// const tasks = [{
//   id: 1,
//   title: 'Learn React',
//   description: 'Learn how to use react in building web app'
// }, {
//   id: 2,
//   title: 'Learn Node',
//   description: 'Learn how to use node in building server'
// }, {
//   id: 3,
//   title: 'Learn Array Manipulation',
//   description: 'Learn how to manipulate arrays in javascript'
// }];

global.tasks = [
    { id:1, key:1, title: 'Important Job', description: 'I need to finish my task', hidden: false},
    { id:2, key:2, title: 'Important Job 2', description: 'I need to finish my task', hidden: false}
]


var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/all_tasks', function(req, res, next) {
  res.json(tasks);
});

router.post('/add_new_task', function(req, res, next) {
    console.log(req.body)
    tasks.push(req.body.task)
    res.json(req.body.task);
});

router.post('/deleteTask', function(req, res, next) {
    console.log(req.body)
    const removedTaskIndex = tasks.findIndex(task => task.id === req.body.task.id)
    console.log(removedTaskIndex)
    tasks.splice(removedTaskIndex, 1)
    res.json(req.body.task);
});

router.post('/editTask', function(req, res, next) {
    const editedTaskIndex = tasks.findIndex(task => task.id === req.body.task.id)
    console.log(editedTaskIndex)
    global.tasks[editedTaskIndex].title = req.body.task.title
    global.tasks[editedTaskIndex].description = req.body.task.description
    global.tasks[editedTaskIndex].hidden = req.body.task.hidden
    res.json(req.body);
});

module.exports = router;
