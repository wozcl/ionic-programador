import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the GestionObrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gestion-obras',
  templateUrl: 'gestion-obras.html',
})
export class GestionObrasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  	this.menuCtrl.enable(true, 'MenuGestionObra');
 	this.menuCtrl.enable(false, 'MenuPrincipal');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GestionObrasPage');
  }

   goToPrincipal(params){
    if (!params) params = {};
	this.menuCtrl.enable(false, 'MenuGestionObra');
 	this.menuCtrl.enable(true, 'MenuPrincipal');
    this.navCtrl.push(PrincipalPage);
  }



}
