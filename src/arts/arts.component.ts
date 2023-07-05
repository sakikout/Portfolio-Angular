import { Component, OnInit } from '@angular/core';
import { FadeInOut } from '../shared/fade-animation';

@Component({
  selector: 'arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss'],
  animations: [FadeInOut(200, 300, true)]
})
export class ArtsComponent implements OnInit{

   showR : boolean = false;
   showWQ : boolean = false;

  constructor(){

  }

  ngOnInit(): void {

  }

  showSlideRefant(id: string){
    this.showR = !this.showR;
    setTimeout(() => this.scroll(id), 500); 
    
  }

  showSlideWQ(){
    this.showWQ = !this.showWQ;
  }

  scroll(id: string) {
    let el = document.getElementById(id);
    //console.log(el);
    // console.log(`scrolling to ${id}`);
    if (el){
       el.scrollIntoView({
        behavior: 'smooth', 
        block: "start",
       inline: "nearest"});
    }
   
}

}
