import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrgPedidoConfirmacionPage } from '../prg-pedido-confirmacion/prg-pedido-confirmacion';
import { PrincipalPage } from '../principal/principal';

/**
 * Generated class for the PrgPedidoHorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prg-pedido-horario',
  templateUrl: 'prg-pedido-horario.html',
})
export class PrgPedidoHorarioPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrgPedidoHorarioPage');
  }

  goToPrgPedidoConfirmacion(params){
    if (!params) params = {};
    this.navCtrl.push(PrgPedidoConfirmacionPage);
  }

  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }

}
