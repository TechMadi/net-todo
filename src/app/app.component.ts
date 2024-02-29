import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {  LucideAngularModule} from 'lucide-angular';
import { ISTATUS, ITodo } from './models/todo.model';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LucideAngularModule,TodoItemComponent,AddTodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'net-todo';
  state=ISTATUS

  todos:ITodo[]=[
    {
      name:"Test Todo",
      status:ISTATUS.INCOMPLETE,
      important:false
    },
    {
      name:"Test 2",
      status:ISTATUS.COMPLETED,
      important:true
    },
    {
      name:"Test 3",
      status:ISTATUS.INCOMPLETE,
      important:true
    },
    {
      name:"Test 4",
      status:ISTATUS.COMPLETED,
      important:false
    },

    {
      name:"Test 5",
      status:ISTATUS.COMPLETED,
      important:false
    },
  ]

 
}
