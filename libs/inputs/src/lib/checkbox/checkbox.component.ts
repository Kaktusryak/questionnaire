import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'checkbox',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() controlName!: string;
  @Input() placeholder: string = '';
  @Input() groupName!: FormGroup;
  @Input() id: string = '';
  @Input() value: string = '';
  @Input() htmlFor: string = '';
  @Input() text: string = '';
  @Input() name: string = '';
}
