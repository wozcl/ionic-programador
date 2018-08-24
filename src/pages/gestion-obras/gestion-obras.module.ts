import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GestionObrasPage } from './gestion-obras';

@NgModule({
  declarations: [
    GestionObrasPage,
  ],
  imports: [
    IonicPageModule.forChild(GestionObrasPage),
  ],
})
export class GestionObrasPageModule {}
