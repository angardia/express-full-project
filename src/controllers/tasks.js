const tasks = [];
let counter = 1;

class Tasks {

    static getAll(req, res) {
        res.send(tasks);
    }

    static getTask(req, res) {
        const taskId = parseInt(req.params.id);
        const requestedTask = Tasks.find(taskId);
        if (!requestedTask) {
            res.status(404).send("Error");
            return;
        }
        res.send(requestedTask);
    }

    static create(req, res) {

        const { title } = req.body;
        if (!title) {
            res.status(400).send("Error");
            return;
        }
        if (title.length < 4) {
            res.status(400).send("Error");
            return;
        }

        const newTask = {
            id: counter,
            title

        };
        counter++;
        tasks.push(newTask);
        res.sendStatus(201);
    }

    static delete(req, res) {
        const taskId = parseInt(req.params.id);
        const taskToDelete = Tasks.find(taskId);
        if (!taskToDelete) {
            res.status(404).send("Error");
            return;
        }
        tasks.splice(Tasks.findIndex(taskToDelete.id), 1);
        res.sendStatus(204);
    }

    static edit(req, res) {
        const { title } = req.body;
        const taskId = parseInt(req.params.id);
        const taskToEdit = Tasks.find(taskId);
        console.log(taskToEdit);
        if (!taskToEdit) {
            res.status(404).send("Error");
            return;
        }
        const index = Tasks.findIndex(taskId);
        const editedTask = {
            id: taskId,
            title
        };
        tasks.splice(index, 1, editedTask);
        res.sendStatus(200);
    }

    static find(taskId){
        return tasks.find(task => task.id === taskId)
    }

    static findIndex(index){
       return tasks.findIndex(task => task.id === index)
    }


}

module.exports = Tasks;
