

export interface ITodo {
    id?: number;
    name: string;
    photo: string;
    isCompleted: boolean;
    description?:string;
    createdAt?: string;
    updatedAt?:string;
}

export type TCreateTodo = Exclude<ITodo, 'id' | 'createdAt'>
export type TDeleteTodo = Partial<ITodo>