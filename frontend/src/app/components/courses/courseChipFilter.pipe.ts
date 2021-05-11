import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'courseChipFilter' })

export class CourseChipFilter implements PipeTransform {
    transform(items: any[], searchChip: string): any[] {
        if(!items) {
            return items;
        }
        if (!searchChip) {
            return items;
        }
        searchChip = searchChip.toLocaleLowerCase();

        return items.filter(function(data) {
            return JSON.stringify(data).toLowerCase().includes(searchChip);
        });
    }
}