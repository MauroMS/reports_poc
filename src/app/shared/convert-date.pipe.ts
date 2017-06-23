import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment/moment';

@Pipe({
  name: 'convertDate'
})
export class ConvertDatePipe implements PipeTransform {

  transform(date: Date, pattern: string = 'DD/MM/YYYY HH:mm'): any {
    if (!date) {
        return date;
    }
    return moment(date).format(pattern);
  }

}
