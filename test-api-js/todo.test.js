
var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    var id = 1;
    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    
    test("add_todos", () => { 
        todo_service.add_todo({"title": "Title: 04", "description": "Rare Description", "done": false});
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });
    test("update_todo", ()=>{
        todo_service.update_todo(3,{ "id": 3, "title": "Awesome Title", "completed": true })
        
        for (let i of todo_service.get_todos().todo){
            if (i["id"] == 3){
                expect(i["completed"]).toEqual(true)
            }
        }
    })
   

});
