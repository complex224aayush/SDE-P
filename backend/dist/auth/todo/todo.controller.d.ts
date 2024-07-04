import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(createTodoDto: {
        text: string;
    }): Promise<import("./todo.schema").Todo>;
    findAll(): Promise<import("./todo.schema").Todo[]>;
    remove(id: string): Promise<any>;
}
