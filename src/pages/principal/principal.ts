import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MdlProgramacionPage } from '../mdl-programacion/mdl-programacion';

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html'
})
export class PrincipalPage {

  constructor(public navCtrl: NavController) {
  }

  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(MdlProgramacionPage);
  }
  
}
