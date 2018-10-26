import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

import { ToDoService } from '../shared/to-do.service';
import { ToDo } from '../shared/to-do.model';

@Component({
  selector: 'app-to-do-add',
  templateUrl: './to-do-add.component.html',
  styleUrls: ['./to-do-add.component.scss']
})
export class ToDoAddComponent implements OnInit {

  todo: ToDo;

  constructor(
    private todoService: ToDoService,
    private location: Location
  ) { }

  ngOnInit() {
    //console.log('add');
    this.todo = {start: new Date(), duration: 1} as ToDo;
  }

  createToDo(): void {
    //console.log(this.todo);
    this.todoService.add(this.todo)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
