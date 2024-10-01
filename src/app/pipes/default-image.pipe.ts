import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(elementAPiper: unknown, monArgument: string): unknown {
    return null;
  }

}
