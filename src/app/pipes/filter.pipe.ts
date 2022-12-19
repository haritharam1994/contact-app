import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // tranform: inside this we have to pass out logic which should implement on our project
  //tranform(change should done in which array,which key should search,property of array should pass):return which property

  transform(allContacts:any[],searchKey:string,propName:string): any[] {
  //  tranform should pass on a emty class ie result
    const result: any[]=[]
    //1st should pass the else case
  if(!allContacts||searchKey==''||propName==''){
    return allContacts
  }   
  allContacts.forEach((contact:any)=>{
    if(contact[propName].trim().toLowerCase().includes(searchKey.toLowerCase())){
      result.push(contact)
    }
  })
    return result;
  }

}
