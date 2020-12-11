import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xyz'
})
export class XyzPipe implements PipeTransform {

  transform(value: string, ...args: any): string {
    return null;
  }

}
