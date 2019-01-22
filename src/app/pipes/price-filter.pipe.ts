import { Pipe, PipeTransform } from '@angular/core';
import { course } from '../model/course';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {

  transform(courses:course[], coursetype: string): any {
      let temp=[];
      if(coursetype==='All Courses'){
          return courses;
      }
      else if(coursetype==='High Price')
          {
              temp=courses.filter((x)=>x.price>=22000)
              return temp;
          }
      else if(coursetype==='Moderate Price')
          {
              temp=courses.filter((x)=>(x.price>18000&&x.price<=22000));
              return temp;
          }
     else
         {
            temp=courses.filter((x)=>x.price<=18000)
           return temp;
          }
    
  }

}
