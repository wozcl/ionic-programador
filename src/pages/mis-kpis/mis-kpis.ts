import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { GestionObrasPage } from '../gestion-obras/gestion-obras';
import { KpisDetallesPage } from '../kpis-detalles/kpis-detalles';
/**
 * Generated class for the MisKpisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-kpis',
  templateUrl: 'mis-kpis.html',
})
export class MisKpisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  	this.menuCtrl.enable(false, 'MenuGestionObra');
 	this.menuCtrl.enable(true, 'MenuPrincipal');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisKpisPage');
  }

  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }

   goBack(params){
    if (!params) params = {};	
    this.navCtrl.push(GestionObrasPage);
  }

  goDetalles(params){
    if (!params) params = {};	
    this.navCtrl.push(KpisDetallesPage);
  }
}
