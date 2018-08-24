import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { GestionObrasPage } from '../gestion-obras/gestion-obras';
import { MenuController } from 'ionic-angular';
import { ObrasDetallesPage } from '../obras-detalles/obras-detalles';


/**
 * Generated class for the MisObrasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-obras',
  templateUrl: 'mis-obras.html',
})
export class MisObrasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  	this.menuCtrl.enable(false, 'MenuGestionObra');
  	this.menuCtrl.enable(true, 'MenuPrincipal');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisObrasPage');
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
    this.navCtrl.push(ObrasDetallesPage);
  }

}
