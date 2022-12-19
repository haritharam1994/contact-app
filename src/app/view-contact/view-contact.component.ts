import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceNameService } from '../service-folder/service-name.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {

  contactId:string=''  
  contact:any
  groupId:any
  groupName:any

  constructor(private activateRouter:ActivatedRoute,private Api:ServiceNameService){}
  
  ngOnInit(): void {
    this.activateRouter.params
    .subscribe((data:any)=>{
     this.contactId=data.contactId
    })
    
    //api call
   this.Api.viewContact(this.contactId)
   .subscribe((data:any)=>{
    this.contact=data;
    this.groupId=data.groupId;
    console.log(this.groupId);
    //api call for grp name
   this.Api.getGroupName(this.groupId).subscribe((result:any)=>{
    this.groupName=result.name;
    console.log(result);
    
   });



   });



  }

}
//module: it means the export class should be import on .ts file which we have to edit
// 404 error means the provided url is mistake