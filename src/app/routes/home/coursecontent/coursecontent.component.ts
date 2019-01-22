import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModuleService } from 'src/app/services/module.service';
import { module } from 'src/app/model/module';

@Component({
  selector: 'app-coursecontent',
  templateUrl: './coursecontent.component.html',
  styleUrls: ['./coursecontent.component.css']
})
export class CoursecontentComponent implements OnInit {
modulecode:string;
module:module;
topics;
  constructor(private route:ActivatedRoute,
    private ms:ModuleService) {
    route.params.subscribe(params=>
      this.modulecode=params['mcode']);

   }

  ngOnInit() {

       this.ms.getModule(this.modulecode).
       subscribe((body:module)=>{
          

         body.topic.sort((x,y)=>
          x.topic_id>y.topic_id?1:y.topic_id>x.topic_id?-1:0);
          for(let x in body.topic)
            {
              body.topic[x].expand='minus';
              body.topic[x].status=true;
              body.topic[x].subTopic.sort((x,y)=>
              x.sub_topic_id>y.sub_topic_id?1:y.sub_topic_id>x.sub_topic_id?-1:0);
            }
         this.module=body;
         this.topics=body.topic;
         console.log(this.module);
       },
       ()=>{
         
       });
  }

  toggleValue(x){
    this.module.topic[x].expand=
     this.module.topic[x].expand=='minus'?'plus':'minus';
    this.module.topic[x].status=
    !this.module.topic[x].status;
  }

}
