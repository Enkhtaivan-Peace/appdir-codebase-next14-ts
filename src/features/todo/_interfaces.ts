export type TRes<T> = {
    success?: boolean;
    message?: string;
    data: T
}

export interface ITodo {
    id: number;
    name: string;
    photo: string;
    isCompleted: boolean;
    createdAt: string;
}