import { KanbanService } from './../../services/kanban-service/kanban.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Board } from './../../model/board.interface';
import { Category } from '../../model/category.interface';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  board: Board;
  categoryList: Category[] = [];
  category: Category;
  constructor(
    private route: ActivatedRoute,
    private kanbanService: KanbanService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.kanbanService.getBoardById(id)
      .subscribe(board => {
        this.board = board;
      });
    this.kanbanService.getCategorys()
      .subscribe(categorys => this.categoryList = categorys)
  }

  onCreateCategory({ name, tasks }): void {
    this.kanbanService.createCategory(name,tasks)
      .subscribe()
  }

  onCreateTask({ title, description }): void {
    this.kanbanService.createTask(title, description)
      .subscribe()
  }
  onDeleteCategory(categoryId: string): void {
    this.kanbanService.deleteCategory(categoryId)
      .subscribe(() => {
        this.categoryList = this.categoryList.filter(
          category => category.id !== categoryId
        );
      })
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
}
