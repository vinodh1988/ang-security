import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { HomeComponent } from './routes/home/home.component';
import { LatestComponent } from './routes/latest/latest.component';
import { VirtualComponent } from './routes/virtual/virtual.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { EnquiryComponent } from './routes/enquiry/enquiry.component';
import { ContactComponent } from './routes/contact/contact.component';
import { CourseComponent } from './routes/home/course/course.component';
import { LoginComponent } from './common/login/login.component';
import { ReviewComponent } from './routes/reviews/review/review.component';
import { OfferPipe } from './pipes/offer.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { CoursecontentComponent } from './routes/home/coursecontent/coursecontent.component';
import { HighlightDirective } from './directives/highlight.directive';
import { OfferdayDirective } from './directives/offerday.directive';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    HomeComponent,
    LatestComponent,
    VirtualComponent,
    ReviewsComponent,
    EnquiryComponent,
    ContactComponent,
    CourseComponent,
    LoginComponent,
    ReviewComponent,
    OfferPipe,
    PriceFilterPipe,
    CoursecontentComponent,
    HighlightDirective,
    OfferdayDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([]),
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
