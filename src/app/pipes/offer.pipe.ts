import { Pipe, PipeTransform } from '@angular/core';
import { DefaultKeyValueDifferFactory } from '@angular/core/src/change_detection/change_detection';




@Pipe({
  name: 'offer'
})
export class OfferPipe implements PipeTransform {

  transform(value: Number, arg?: any): any {
    if(value>=25000)
    return "CODE20 (20% off)";
else if(value>22000)
    return "CODE 14 (14% off)";
else if(value>15000)
     return "OFFER8 (8% off)";
else 
     return "OFFER5 (5% off)";
  }

}
