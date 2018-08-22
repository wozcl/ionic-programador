import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrgPedidoHorarioPage } from '../prg-pedido-horario/prg-pedido-horario';
import { PrincipalPage } from '../principal/principal';
/**
 * Generated class for the PrgPedidoDiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prg-pedido-dia',
  templateUrl: 'prg-pedido-dia.html',
})
export class PrgPedidoDiaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrgPedidoDiaPage');
  }
  
  goToPrgPedidoHorario(params){
    if (!params) params = {};
    this.navCtrl.push(PrgPedidoHorarioPage);
  }

  goToPrincipal(params){
    if (!params) params = {};
    this.navCtrl.push(PrincipalPage);
  }
}
