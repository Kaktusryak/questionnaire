import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-submit',
  standalone: true,
  imports: [],
  templateUrl: './button-submit.component.html',
  styleUrl: './button-submit.component.scss'
})
export class ButtonSubmitComponent {
  @Input() text : string = 'Submit'
  @Input() width : string = '6rem'
  @Input() height : string = '2rem'
}
