import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { ITodo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule,LucideAngularModule,TodoItemComponent],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  showModal:boolean=false;
  @Input() todo!:ITodo;
  
  toggleModal():void{
    this.showModal=!this.showModal
  }

  completeTask(id:string){

  }
  
}
