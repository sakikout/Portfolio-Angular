import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ConfirmModalComponent } from '../confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit{

  @Input() message!: string;
  @Input() type = 'danger';
  @Input() title !: string;

  constructor(
    public bsModalRef: BsModalRef){

  }

  ngOnInit(): void {

  }

  onClose(){
    this.bsModalRef.hide();
  }

}
