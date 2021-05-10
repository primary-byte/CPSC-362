import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter'})

export class CourseFilterPipe implements PipeTransform {
    transform(items: any, searchText: string): any {
        if (!items) {
            return items;
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();

        return items.filter(function(data) {
            return JSON.stringify(data).toLowerCase().includes(searchText);
        });
    }
}