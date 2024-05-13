import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  pushArrayToStorage<T>(array: T[], name: string) {
    localStorage.setItem(name, JSON.stringify(array));
  }

  getArrayFromStorage<T>(name: string): T {
    const arrayString = localStorage.getItem(name);
    const array = JSON.parse(arrayString || '[]');
    console.log('service');
    console.log(array);
    return array;
  }
}
