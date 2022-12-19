import { Component, OnInit } from '@angular/core';
import { ServiceNameService } from '../service-folder/service-name.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  allGroups:any[]=[]
  contactName:string=''
  constructor(private api:ServiceNameService){}

  ngOnInit(): void {
    this.api.getAllGroups()
    .subscribe((data:any)=>{
      console.log(data);
      this.allGroups=data
      
    })
    
  }
  addContact(){

}
}
