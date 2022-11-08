class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todo_data;
    }

    add_todo(todo){
        this.todo_data.todo.push(todo);
        return this.todo_data;
        console.log(this.todo_data);
    }

    delete_todo(id){
        delete this.todo_data.todo[0]     
    }

    update_todo(id, todo){
    this.todo_data.todo[id] = todo;
    return this.todo_data;
    }
}


module.exports= todoservice;