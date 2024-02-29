import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [LucideAngularModule,ReactiveFormsModule,FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

addTodoForm:FormGroup=new FormGroup({
  todo:new FormControl("",[Validators.required])
})


get todo(){
   return this.addTodoForm.get('todo')
}

submit(){
  console.log(this.addTodoForm.value)
}
}
