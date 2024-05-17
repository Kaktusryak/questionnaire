import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'radio-button',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatRadioModule],
  templateUrl: './radio-button.component.html',
  styleUrl: './radio-button.component.scss',
})
export class RadioButtonComponent {
  @Input() value: string = '';
  @Input() text: string = this.value;
}
