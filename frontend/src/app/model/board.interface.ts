import { Category } from './category.interface';


export interface Board {
    id: number,
    name: string,
    categorys: Category[]
}