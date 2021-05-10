import { Task } from './task.interface';

export interface Category {
    id: string,
    board_id: number,
    name: string,
    tasks: Task[]
}