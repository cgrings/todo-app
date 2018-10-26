import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Page } from '../../shared/page';
import { ToDo } from '../shared/to-do.model';
import { ToDoService } from '../shared/to-do.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  pageable: Page<ToDo>;

  constructor(
    private route: ActivatedRoute,
    private todoService: ToDoService,
  ) { }

  ngOnInit() {
    this.getToDos();
  }

  getToDos(): void {
    const page = +this.route.snapshot.queryParamMap.get('page') || 1;
    //console.log(`Page: ${page}`);
    this.todoService.getAll(page)
      .subscribe(pageable => this.pageable = pageable);
  }

  removeToDo(todo: ToDo): void {
    this.todoService.delete(todo).subscribe(() => this.getToDos());
  }

}
