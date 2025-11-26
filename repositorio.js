export default class Repositorio{
    
    constructor(){
        this.tasks = [{
            id: 1,
            description: "comer",
            done: 'false'
        }]
        this.nextID = 2
    }   

    //create

    createTask(data){
        const newTask ={
            id: this.nextID++,
            description: data.description,
            done: data.done,
        }
        this.tasks.push(newTask)
        
        return newTask;
    }

    //read

    readTask(){
        return this.tasks
    }

    //update

    updateTask(id, data){
        const task = this.tasks.find( t => t.id===id)
        if(task === undefined){
            throw "Tarefa não encontrada"
        }
        task.description = data.description ?? task.description;
        task.done = data.done ?? task.done;

        return task
    }

    //delete
    
    deleteTask(id){
        this.tasks = this.tasks.filter(t=>t.id !== id)
    }
}