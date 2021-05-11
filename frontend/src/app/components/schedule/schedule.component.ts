import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  time = [
    '12:00 AM',
    '1:00  AM',
    '2:00  AM',
    '3:00  AM',
    '4:00  AM',
    '5:00  AM',
    '6:00  AM',
    '7:00  AM',
    '8:00  AM',
    '9:00  AM',
    '10:00 AM',
    '11:00 AM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
    '5:00 PM',
    '6:00 PM',
    '7:00 PM',
    '8:00 PM',
    '9:00 PM',
    '10:00 PM',
    '11:00 PM',
    '12:00 AM',
  ];

  monday = [
    'Eat',
    'Drink',
    'Brush teeth',
    'Get dressed',
    'Go to school',
    'Eat lunch',
    'Code some websites',
    'Cry in the shower',
    'Code some more',
    'Study some tv',
    'Create an imaginary friend',
    'Eat some ice cream',
    'Code more',
    'Look up Elon Musk',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep'
  ];
  tuesday = [
    'Eat',
    'Drink',
    'Brush teeth',
    'Get dressed',
    'Go to school',
    'Eat lunch',
    'Code some websites',
    'Cry in the shower',
    'Code some more',
    'Study some tv',
    'Create an imaginary friend',
    'Eat some ice cream',
    'Code more',
    'Look up Elon Musk',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep'
  ];
  wednesday = [
    'Eat',
    'Drink',
    'Brush teeth',
    'Get dressed',
    'Go to school',
    'Eat lunch',
    'Code some websites',
    'Cry in the shower',
    'Code some more',
    'Study some tv',
    'Create an imaginary friend',
    'Eat some ice cream',
    'Code more',
    'Look up Elon Musk',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep'
  ];
  thursday = [
    'Eat',
    'Drink',
    'Brush teeth',
    'Get dressed',
    'Go to school',
    'Eat lunch',
    'Code some websites',
    'Cry in the shower',
    'Code some more',
    'Study some tv',
    'Create an imaginary friend',
    'Eat some ice cream',
    'Code more',
    'Look up Elon Musk',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep'
  ];
  friday = [
    'Eat',
    'Drink',
    'Brush teeth',
    'Get dressed',
    'Go to school',
    'Eat lunch',
    'Code some websites',
    'Cry in the shower',
    'Code some more',
    'Study some tv',
    'Create an imaginary friend',
    'Eat some ice cream',
    'Code more',
    'Look up Elon Musk',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep'
  ];
  saturday = [
    'Eat',
    'Drink',
    'Brush teeth',
    'Get dressed',
    'Go to school',
    'Eat lunch',
    'Code some websites',
    'Cry in the shower',
    'Code some more',
    'Study some tv',
    'Create an imaginary friend',
    'Eat some ice cream',
    'Code more',
    'Look up Elon Musk',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep'
  ];
  sunday = [
    'Eat',
    'Drink',
    'Brush teeth',
    'Get dressed',
    'Go to school',
    'Eat lunch',
    'Code some websites',
    'Cry in the shower',
    'Code some more',
    'Study some tv',
    'Create an imaginary friend',
    'Eat some ice cream',
    'Code more',
    'Look up Elon Musk',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep',
    'Sleep'
  ];

  constructor() { }

  ngOnInit(): void {
  }


  dropMonday(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.monday, event.previousIndex, event.currentIndex);
  }
  dropTuesday(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tuesday, event.previousIndex, event.currentIndex);
  }
  dropWednesday(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.wednesday, event.previousIndex, event.currentIndex);
  }
  dropThursday(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.thursday, event.previousIndex, event.currentIndex);
  }
  dropFriday(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.friday, event.previousIndex, event.currentIndex);
  }
  dropSaturday(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.saturday, event.previousIndex, event.currentIndex);
  }
  dropSunday(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.sunday, event.previousIndex, event.currentIndex);
  }
}
