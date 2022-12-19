import { Component , OnInit } from '@angular/core';
import { MyContact } from 'src/models/mycontact';
import { ServiceNameService } from '../service-folder/service-name.service';

@Component({
  selector: 'app-contact-manager',
  templateUrl: './contact-manager.component.html',
  styleUrls: ['./contact-manager.component.css']
})
export class ContactManagerComponent implements OnInit {
allContacts:MyContact[]=[] 
searchKey:string=''

  constructor(private api:ServiceNameService){ }
ngOnInit():void{
 this.api.getAllContact().subscribe(
  (data:any)=>{
    console.log(data);
    this.allContacts=data
  }
 )
}
//search
search(event:any){
console.log(event.target.value);
this.searchKey=event.target.value
}
addContact(){
  
}

}
