import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.replace('PT','').replace('M',' minut').replace('H',' hour');
  }

}
