import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgregarProgramadorPage } from './agregar-programador';


@NgModule({
  declarations: [
    AgregarProgramadorPage,
  ],
  imports: [
    IonicPageModule.forChild(AgregarProgramadorPage),
  ],
})
export class AgregarProgramadorPageModule {}
