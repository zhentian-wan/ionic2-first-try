import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  openInAppBrowser(){
    const url = "https://www.google.fi";
    window.open(url, '_system');
  }

}
