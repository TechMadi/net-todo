import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LucideAngularComponent, LucideAngularModule, LucideComponent } from 'lucide-angular';
import { ISTATUS, ITodo } from './models/todo.model';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'net-todo';
  showModal:boolean=true;

  todos:ITodo[]=[
    {
      name:"Test Todo",
      status:ISTATUS.INCOMPLETE
    },
    {
      name:"Test 2",
      status:ISTATUS.INCOMPLETE
    },
    {
      name:"Test 3",
      status:ISTATUS.INCOMPLETE
    },
  ]

  toggleModal():void{
    this.showModal=!this.showModal
  }
}
