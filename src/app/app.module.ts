import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { PrincipalPage } from '../pages/principal/principal';
import { MdlProgramacionPage } from '../pages/mdl-programacion/mdl-programacion';
import { PrgPedidoDiaPage } from '../pages/prg-pedido-dia/prg-pedido-dia';
import { PrgPedidoHorarioPage } from '../pages/prg-pedido-horario/prg-pedido-horario'
import { PrgPedidoConfirmacionPage } from '../pages/prg-pedido-confirmacion/prg-pedido-confirmacion'
import { PrgPedidoErrorPage } from '../pages/prg-pedido-error/prg-pedido-error'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PrincipalPage,
    MdlProgramacionPage,
    PrgPedidoDiaPage,
    PrgPedidoHorarioPage,
    PrgPedidoConfirmacionPage,
    PrgPedidoErrorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    PrincipalPage,
    MdlProgramacionPage,
    PrgPedidoDiaPage,
    PrgPedidoHorarioPage,
    PrgPedidoConfirmacionPage,
    PrgPedidoErrorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
