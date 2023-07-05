import { Component } from '@angular/core';
import { FadeInOut, simpleFadeAnimation } from '../shared/fade-animation';
import { Animated } from '../shared/prepare-route';

@Component({
  selector: 'app-home-together',
  templateUrl: './home-together.component.html',
  styleUrls: ['./home-together.component.scss'],
  animations:[simpleFadeAnimation]
})
export class HomeTogetherComponent {

  showComponent !: any;

getShow(value: any){
  this.showComponent = value;
  console.log(this.showComponent);
}

}
