import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ToDoService } from '../shared/to-do.service';
import { ToDo } from '../shared/to-do.model';

@Component({
  selector: 'app-to-do-edit',
  templateUrl: './to-do-edit.component.html',
  styleUrls: ['./to-do-edit.component.scss']
})
export class ToDoEditComponent implements OnInit {

  todo: ToDo;

  constructor(
    private route: ActivatedRoute,
    private todoService: ToDoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    //console.log('update');
    this.getToDo();
  }

  getToDo(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.todoService.get(id)
      .subscribe(todo => this.todo = todo);
  }

  updateToDo(): void {
    //console.log(this.todo.id);
    this.todoService.update(this.todo)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
