import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe',
  standalone: true
})
export class DateToYMD implements PipeTransform {

  transform(value: Date): string {
    const date = new Date(value)
    return date.toISOString().substring(0,10)
  }

}
