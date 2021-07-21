import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vasi App';
  name="vasi krish";
  myEvent(evt: any){
    console.warn(evt);
    
  }
  getName(){
    return this.name
  }
  
  obj={name:"vasi",age:22,char:"good"}
  array=[1,2,3]
}
