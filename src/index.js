const express = require('express');
require('./db/mongoose');
const User = require('./models/user')
const Task = require('./models/Task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT;


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Startovan server buraz na portu: ' + port);
})

/*const fun = async () =>{
     const user = await User.findById('5cadbccef922f418883c43d3');
     await user.populate('tasks').execPopulate();
     console.log(user.tasks);
} 
fun();*/