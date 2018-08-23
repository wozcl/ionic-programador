import { NgModule } from '@angular/core';
import { IonicPageModule,NavController } from 'ionic-angular';
import { PrgProgramadosPage } from './prg-programados';

@NgModule({
  declarations: [
    PrgProgramadosPage,
  ],
  imports: [
    IonicPageModule.forChild(PrgProgramadosPage),
  ],
})
export class PrgProgramadosPageModule {}
