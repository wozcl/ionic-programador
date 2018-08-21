import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MdlProgramacionPage } from './mdl-programacion';
import { NavController, Nav } from 'ionic-angular';


@NgModule({
  declarations: [
    MdlProgramacionPage,
  ],
  imports: [
    IonicPageModule.forChild(MdlProgramacionPage),
  ],
})
export class MdlProgramacionPageModule {}
