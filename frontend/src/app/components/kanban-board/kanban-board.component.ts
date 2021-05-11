import { Category } from './../../model/category.interface';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from './../../model/board.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  board: Board = new Board('My Board', [
    new Category('Backlog', [
      "Some random idea",
      "This is another random idea",
      "build an awesome application"
    ]),
    new Category('To Do', [
      "Lorem ipsum",
      "foo",
      "This was in the 'Research' column"
    ]),
    new Category('Doing', [
      'Get to work',
      'Pick up groceries',
      'Go home',
      'Fall asleep'
    ]),
    new Category('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ])
  ]);

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  editTask(task: string) {
    
  }
}
