import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'button-glow',
  templateUrl: './button-glow.component.html',
  styleUrls: ['./button-glow.component.scss']
})
export class ButtonGlowComponent {
  
  showSpan : boolean = false;

  @Input('label') label!: string;
  @Input('color') color: string = 'purple';
  @Input('id') id!: string;


  ngOnInit(): void {
    let button = document.getElementById(this.id);
    if (button){
      this.showSpan = false;
    
    }
    
  }

onClick(){
    let btn = document.getElementById(this.id);
  
    setTimeout(() => {
      btn?.remove();
      this.showSpan = true;
    }
      , 500);

    
    
}

}
