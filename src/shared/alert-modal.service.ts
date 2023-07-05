import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  INFO = 'info'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor( private modalService: BsModalService) { }

  private showAlert(type: string, title: string, message: string, dismissTimeout?: number){
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);

    bsModalRef.content.type = type;
    bsModalRef.content.title = title;
    bsModalRef.content.message = message;

    if(dismissTimeout){
      setTimeout( () => bsModalRef.hide(), dismissTimeout);
    }
  }

  showAlertDanger(title: string, message: string){
    this.showAlert(AlertTypes.DANGER, title, message);
  }

  showAlertSuccess(title: string, message: string){
    this.showAlert(AlertTypes.SUCCESS, title, message, 3000);
  }

  showAlertInfo(title: string, message: string){
    this.showAlert(AlertTypes.INFO, title, message, 3000);
  }

  showConfirm(title: string, msg: string, confirmTxt ?: string, cancelTxt?: string){
    var bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;

    if(confirmTxt){
      bsModalRef.content.confirmTxt = confirmTxt;
    }

    if(cancelTxt){
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }

}
