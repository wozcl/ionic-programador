import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrgPedidoErrorPage } from '../prg-pedido-error/prg-pedido-error';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the PrgPedidoConfirmacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prg-pedido-confirmacion',
  templateUrl: 'prg-pedido-confirmacion.html',
})
export class PrgPedidoConfirmacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrgPedidoConfirmacionPage');
  }

  goToPrgPedidoError(params){
    if (!params) params = {};
    this.navCtrl.push(PrgPedidoErrorPage);
  }
  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }

}
