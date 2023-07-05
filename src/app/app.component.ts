import { simpleFadeAnimation, FadeInOut } from './shared/fade-animation';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [simpleFadeAnimation]
})
export class AppComponent {
  title = 'my-portfolio';

  prepareRoute(outlet : any) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
