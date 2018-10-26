import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppAuthGuard } from '../app.authguard';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoEditComponent } from './to-do-edit/to-do-edit.component';
import { ToDoAddComponent } from './to-do-add/to-do-add.component';

const todosRoutes: Routes = [
  { path: 'todo/list', component: ToDoListComponent },
  {
    path: 'todo/edit/:id',
    component: ToDoEditComponent,
    canActivate: [AppAuthGuard],
    data: { roles: ['todo-manage'] }
  },
  { path: 'todo/new', component: ToDoAddComponent },
]

@NgModule({
  imports: [
    RouterModule.forChild(todosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ToDosRoutingModule { }