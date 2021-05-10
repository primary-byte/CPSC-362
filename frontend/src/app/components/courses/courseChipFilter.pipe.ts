import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'courseChipFilter' })
export class CourseChipFilter implements PipeTransform {

    transform(items: any[], searchChip: boolean): any[] {
        if(!items) {
            return items;
        }
        if (!searchChip) {
            return items;
        }
        return items.filter(it => {
            return it.includes(searchChip);
        });
    }
}