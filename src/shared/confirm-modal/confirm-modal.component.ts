import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent {

  @Input() title!: string;
  @Input() msg!: string;
  @Input() cancelTxt = 'Cancelar';
  @Input() confirmTxt = 'Confirmar';

  confirmResult!: Subject<boolean>;

constructor(
    public bsModalRef: BsModalRef){

}

ngOnInit(): void {
    this.confirmResult = new Subject();
}

onClose(){
    this.confirmAndClose(false);
}

onConfirm(){
    this.confirmAndClose(true);
}


private confirmAndClose(value: boolean){
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

}
