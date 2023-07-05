import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalService } from '../shared/alert-modal.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  
  constructor(
    private router: Router,
    private bsservice: BsModalService,
    private modal: AlertModalService
   ){
 
   }
 
   ngOnInit(): void {
     //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
     //Add 'implements OnInit' to the class.
     
   }


  showTelegram(){
    this.modal.showAlertInfo('Telegram: ', 'Add me on Telegram @dibella666! :)');
  }

  showAbout(){
    this.modal.showConfirm('About', 'This is where you put the text from about.', 'Confirm', 'Cancel');
  }

  showTerms(){
    this.modal.showConfirm('Terms', 'This is where you put the text from the terms.', 'Confirm', 'Cancel');
  }

  showPrivacyPolicy(){
    this.modal.showConfirm('Privacy Policy', 'This is where you put the text from the privacy policy.', 'Confirm', 'Cancel');
  }

}
