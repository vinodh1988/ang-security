import { Directive, ViewContainerRef, TemplateRef,Input } from '@angular/core';
import { OfferService } from '../services/offer.service';

@Directive({
  selector: '[offer]'
})
export class OfferdayDirective {

  constructor(private vc:ViewContainerRef,
    private tref:TemplateRef<any>,private os:OfferService) { }

    
    @Input() set offer(data){
      console.log(data);
      console.log(this.os.isOffer);
      if(this.os.isOffer)
      {
          this.vc.createEmbeddedView(this.tref);
          setTimeout(()=>this.vc.clear(),data*1000);
      }
  
      else{
              this.vc.clear();
      }
     
  }
}
