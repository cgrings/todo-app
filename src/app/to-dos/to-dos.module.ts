import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';
import { ToDoEditComponent } from './to-do-edit/to-do-edit.component';

import { ToDoService } from './shared/to-do.service';

import { ToDosRoutingModule } from './to-dos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToDosRoutingModule,
    SharedModule
  ],
  declarations: [
    ToDoListComponent,
    ToDoEditComponent,
    ToDoAddComponent,
  ],
  providers: [ToDoService]
})
export class ToDosModule { }