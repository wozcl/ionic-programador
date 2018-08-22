import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PrincipalPage } from '../pages/principal/principal';
import { LoginPage } from '../pages/login/login';
import { PrgPedidoDiaPage } from '../pages/prg-pedido-dia/prg-pedido-dia';
import { PrgProgramadosPage } from '../pages/prg-programados/prg-programados';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Hacer pedido', component: PrgPedidoDiaPage},
      { title: 'Pedidos programados', component: PrgProgramadosPage},
      { title: 'Productos disponibles', component: PrincipalPage},
      { title: 'Resultados de laboratorio', component: PrincipalPage},
      { title: 'Perfil de obra', component: PrincipalPage},
      { title: 'Contactar ejecutivo', component: PrincipalPage},
      { title: 'Cambiar a gestión de obra', component: PrincipalPage}




    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
