import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { ObrasDetallesPage } from '../obras-detalles/obras-detalles';

/**
 * Generated class for the EliminarProgramadorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eliminar-programador',
  templateUrl: 'eliminar-programador.html',
})
export class EliminarProgramadorPage {

	constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
	  	this.menuCtrl.enable(false, 'MenuGestionObra');
	 	this.menuCtrl.enable(true, 'MenuPrincipal');
 	}

	ionViewDidLoad() {
	    console.log('ionViewDidLoad EliminarProgramadorPage');
  	}

	goToPrincipal(params){
	    if (!params) params = {};
	    this.navCtrl.push(PrincipalPage);
	}
	goBack(params){
	    if (!params) params = {};	
	    this.navCtrl.push(ObrasDetallesPage);
	}	

}



