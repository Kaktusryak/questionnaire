import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  @Input() controlName!: string;
  @Input() placeholder: string = '';
  @Input() groupName!: FormGroup;
  @Input() id: string = '';
  @Input() type: string = 'text';
}
