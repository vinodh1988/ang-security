import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
isOffer:boolean=true;
message:string="30 to 50 percent flat discount on all products";
  constructor() { }
}


