import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'registation'
})
export class RegistationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
