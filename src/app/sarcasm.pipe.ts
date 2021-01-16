import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sarcasm'
})
export class SarcasmPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
