import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { CSVDownloadService } from '../../services/csvdownload.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  csvService = inject(CSVDownloadService)
  @Input() data : any
  @Input() name : any
  @Input() lastName : any
  @Input() dateOfBirth : any
  @Input() education : any
  @Input() role : any
  @Input() position : any


  handleDownload():void{
    this.csvService.downloadFile([this.data] ,this.name + '_' + this.lastName)
  }
}

