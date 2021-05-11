import { CourseChipFilter } from './../courseChipFilter.pipe';
import { Component, OnInit, Input, Output } from '@angular/core';
import { MatChip, MatChipList } from '@angular/material/chips';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-sort-chips',
  templateUrl: './sort-chips.component.html',
  styleUrls: ['./sort-chips.component.scss'],
})
export class SortChipsComponent implements OnInit {

  @Input() options: string[] =  [ 'is100s', 'is200s', 'is300s', 'is400s', 'is500s',
                                  'isIntro', 'isLowerDiv', 'isUpperDiv', 'isElective', 'isMasters'];

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelection(chip: MatChip) {
    chip.toggleSelected();
 }
}

