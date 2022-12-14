import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  nvalue: string = '';

  transform(value: any, ...args: unknown[]): unknown {
    this.nvalue = value.split('').reverse().join('');
    return this.nvalue;
  }

}
