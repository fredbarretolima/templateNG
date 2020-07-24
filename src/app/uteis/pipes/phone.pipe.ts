import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {

      if (value.trim().length == 10)
        return value.replace(/[()\b-]/g, '').replace(/^(\d{2})(\d{4})(\d{4})$/, '($1) $2-$3');

      if (value.trim().length == 11)
        return value.replace(/[()\b-]/g, '').replace(/^(\d{2})(\d{1})(\d{4})(\d{4})$/, '($1) $2 $3-$4');

    }

    return value;
  }
}
