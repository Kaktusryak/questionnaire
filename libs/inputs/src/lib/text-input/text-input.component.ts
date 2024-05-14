import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss'
})
export class TextInputComponent {
  @Input() id : string = ''
  @Input () formControl! : FormControl
  @Input() placeholder : string = ''
  @Input() text : string = ''

  @Output() textChange = new EventEmitter<string>();


  ngOnInit(){
 
  }

  onTextChange(text:string){
    this.textChange.emit(text)
  }

}
