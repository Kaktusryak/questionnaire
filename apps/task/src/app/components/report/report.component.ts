import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  router = inject(Router)

  @Input() name : any
  @Input() users_resolved : any
  @Input() active : any
  @Input() image_url : any
  @Input() id : any

  handleClick():void{
    this.router.navigateByUrl('/dashboard/'+this.id)
  }

}