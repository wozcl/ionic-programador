import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { PrgProductosDisponiblesPage } from '../prg-productos-disponibles/prg-productos-disponibles';
/**
 * Generated class for the ProductoDetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-producto-detalles',
  templateUrl: 'producto-detalles.html',
})
export class ProductoDetallesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  	this.menuCtrl.enable(false, 'MenuGestionObra');
 	this.menuCtrl.enable(true, 'MenuPrincipal');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductoDetallesPage');
  }

  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }
  goBack(params){
    if (!params) params = {};	
    this.navCtrl.push(PrgProductosDisponiblesPage);
  }


}
