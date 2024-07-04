import { Model } from 'mongoose';
import { Todo, TodoDocument } from './todo.schema';
export declare class TodoService {
    private todoModel;
    constructor(todoModel: Model<TodoDocument>);
    create(createTodoDto: {
        text: string;
    }): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    remove(id: string): Promise<any>;
}
