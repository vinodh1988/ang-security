import { Directive, ElementRef,Input, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

@Input('highlight') price:number;

  constructor(private el:ElementRef) { }

  @HostListener("mouseover")
  applyChanges():void{
   if(this.price>25000)
      this.el.nativeElement.style.border="2px solid red";
   else if(this.price>=20000)
      this.el.nativeElement.style.border="2px solid  green";
   else
   this.el.nativeElement.style.border="2px solid  black";
  }
  
  @HostListener('mouseleave')
    retainOriginal(){
        this.el.nativeElement.style.border="none";
    }
}

