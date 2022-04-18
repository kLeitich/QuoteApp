import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateposted'
})
export class DatepostedPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
