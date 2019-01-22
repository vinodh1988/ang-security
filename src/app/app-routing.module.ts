import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { ContactComponent } from './routes/contact/contact.component';
import { LatestComponent } from './routes/latest/latest.component';
import { VirtualComponent } from './routes/virtual/virtual.component';
import { ReviewsComponent } from './routes/reviews/reviews.component';
import { EnquiryComponent } from './routes/enquiry/enquiry.component';
import { CoursecontentComponent } from './routes/home/coursecontent/coursecontent.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"contacts",component: ContactComponent},
  {path:"newcourses",component: LatestComponent},
  {path:"vclass",component: VirtualComponent},
  {path:"reviews",component: ReviewsComponent},
  {path:"enquiry",component: EnquiryComponent},
  {path:"ccontent/:mcode",component: CoursecontentComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
