import { Component } from '@angular/core';
import {ViewController} from "ionic-angular";

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  constructor(private viewCtrl: ViewController){}

  onClose(){
    this.viewCtrl.dismiss();
  }
}
