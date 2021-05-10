import { Category } from './category.interface';

export class Board {
    constructor(
        public name: string, 
        public categories: Category[]
    ) {}
}