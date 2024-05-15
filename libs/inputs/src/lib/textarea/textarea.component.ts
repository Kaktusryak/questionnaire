import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'text-area',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  @Input () controlName! : string
  @Input() placeholder : string = ''
  @Input() groupName! : FormGroup
  @Input() id : string = ''

  onChange(){
    console.log(this.placeholder)
  }

}