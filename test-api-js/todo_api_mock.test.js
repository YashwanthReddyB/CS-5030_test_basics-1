// Mock Todo Service : Lets assume that it is still in development / not ready yet  
// var todoservice = require('./todo.service.js');
const app = require("./index");

jest.mock('./todo.service.js');

jest.mock('./index');

// let todo_serv = new todoservice()
// todo_serv.get_todos = jest.fn();

describe("todolist api test",()=> {
    test("api reponse", async()=>{

        const mockReq = {}
        const mockRes = {"todo": [{"id": 1, "title": "Learn React", "completed": false}, {"id": 2, "title": "Learn Node", "completed": false}, {"id": 3, "title": "Learn Express", "completed": false}]};

        app.get.mockResolvedValue({
            data:mockRes
        });

        const value = await app.get('/todolist');
        
        // expect(todoservice).toBeDefined();
        
        // expect(todoservice.get_todos).toHaveBeenCalledWith();
        expect(value).toEqual({data:mockRes});
        // expect(todo_serv.get_todos).toHaveBeenCalled();
    })
});