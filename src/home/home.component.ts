import { BsModalService } from 'ngx-bootstrap/modal';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AlertModalService } from '../shared/alert-modal.service';
import { FadeInOut, simpleFadeAnimation } from '../shared/fade-animation';
import { Animated } from '../shared/prepare-route';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [FadeInOut(200, 300, true)]
})
export class HomeComponent implements OnInit {

  showSpan : boolean = false;
  @Output('cliked') showComponent = new EventEmitter<boolean>();

  constructor(
   private router: Router,
   private bsservice: BsModalService,
   private modal: AlertModalService
  ){

  }

  ngOnInit(): void {
    let button = document.getElementById('abtmebtn');
    if (button){
      this.showSpan = false;
    }
    
  }

  showTelegram(){
    this.modal.showAlertSuccess('Telegram: ', 'Add my contact @dibella666! :)');
  }

  hideBtn(){
    let button = document.getElementById('abtmebtn');
    let span = document.getElementById('spanHidden');
    button?.remove();
    this.showSpan = true;
    this.showComponent.emit(true);
    
  }
}
