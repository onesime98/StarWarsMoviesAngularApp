import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'male':
        return 'M';
        break;
      case 'female':
        return 'F';
        break;
      case 'unknown':
        return 'Unknown';
        break;
      case 'n/a':
        return 'No gender';
        break;
      default: return value;
    }
  }

  /*
    transform(value: string): string {
        return value == undefined ? value : value.toUpperCase( );
    }
   */

}
