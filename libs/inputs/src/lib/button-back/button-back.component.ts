import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-back',
  standalone: true,
  imports: [],
  templateUrl: './button-back.component.html',
  styleUrl: './button-back.component.scss'
})
export class ButtonBackComponent {
  @Input() text : string = 'Back'
  @Input() width : string = '6rem'
  @Input() height : string = '2rem'
  @Input() type : string = 'button'
}
