import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { PrincipalPage } from '../pages/principal/principal';
import { MdlProgramacionPage } from '../pages/mdl-programacion/mdl-programacion';
import { PrgPedidoDiaPage } from '../pages/prg-pedido-dia/prg-pedido-dia';

import { PrgPedidoHorarioPage } from '../pages/prg-pedido-horario/prg-pedido-horario'
import { PrgPedidoConfirmacionPage } from '../pages/prg-pedido-confirmacion/prg-pedido-confirmacion'
import { PrgPedidoErrorPage } from '../pages/prg-pedido-error/prg-pedido-error'
import { PrgProductosDisponiblesPage } from '../pages/prg-productos-disponibles/prg-productos-disponibles'
import { PrgProgramadosPage } from '../pages/prg-programados/prg-programados'
import { PrgProgramados2Page } from '../pages/prg-programados2/prg-programados2';
import { PrgContactoEjecutivoPage } from '../pages/prg-contacto-ejecutivo/prg-contacto-ejecutivo';
import { PrgResultadosLaboratorioPage } from '../pages/prg-resultados-laboratorio/prg-resultados-laboratorio';
import { PrgPerfilObraPage } from '../pages/prg-perfil-obra/prg-perfil-obra';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    PrincipalPage,
    MdlProgramacionPage,
    PrgPedidoDiaPage,
    PrgPedidoHorarioPage,
    PrgPedidoConfirmacionPage,
    PrgPedidoErrorPage,
    PrgProgramadosPage,
    PrgProgramados2Page,
    PrgProductosDisponiblesPage,
    PrgProgramadosPage,
    PrgContactoEjecutivoPage,
    PrgResultadosLaboratorioPage,
    PrgPerfilObraPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    PrincipalPage,
    MdlProgramacionPage,
    PrgPedidoDiaPage,
    PrgPedidoHorarioPage,
    PrgPedidoConfirmacionPage,
    PrgPedidoErrorPage,
    PrgProgramadosPage,
    PrgProgramados2Page,
    PrgProductosDisponiblesPage,
    PrgContactoEjecutivoPage,
    PrgResultadosLaboratorioPage,
    PrgPerfilObraPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
