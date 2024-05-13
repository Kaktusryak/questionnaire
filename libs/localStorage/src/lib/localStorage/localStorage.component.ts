import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'lib-local-storage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './localStorage.component.html',
  styleUrl: './localStorage.component.css',
  providers:[LocalStorageService]
})
export class LocalStorageComponent {}
