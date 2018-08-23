import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PrincipalPage } from '../pages/principal/principal';
import { LoginPage } from '../pages/login/login';
import { PrgPedidoDiaPage } from '../pages/prg-pedido-dia/prg-pedido-dia';
import { PrgProductosDisponiblesPage } from '../pages/prg-productos-disponibles/prg-productos-disponibles'
import { PrgProgramadosPage } from '../pages/prg-programados/prg-programados';
import { PrgProgramados2Page } from '../pages/prg-programados2/prg-programados2';
import { PrgContactoEjecutivoPage } from '../pages/prg-contacto-ejecutivo/prg-contacto-ejecutivo';
import { PrgResultadosLaboratorioPage } from '../pages/prg-resultados-laboratorio/prg-resultados-laboratorio';
import { PrgPerfilObraPage } from '../pages/prg-perfil-obra/prg-perfil-obra';

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
      { title: 'Productos disponibles', component: PrgProductosDisponiblesPage},
      { title: 'Pedidos programados', component: PrgProgramadosPage},
      { title: 'Resultados de laboratorio', component: PrgResultadosLaboratorioPage},
      { title: 'Perfil de obra', component: PrgPerfilObraPage},
      { title: 'Contactar ejecutivo', component: PrgContactoEjecutivoPage},
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
