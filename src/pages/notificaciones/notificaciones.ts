import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { GestionObrasPage } from '../gestion-obras/gestion-obras';


@IonicPage()
@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
})
export class NotificacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  	this.menuCtrl.enable(false, 'MenuGestionObra');
 	this.menuCtrl.enable(true, 'MenuPrincipal');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionesPage');
  }

  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }

  goBack(params){
    if (!params) params = {};	
    this.navCtrl.push(GestionObrasPage);
  }
}
