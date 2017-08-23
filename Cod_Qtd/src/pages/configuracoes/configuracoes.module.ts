import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfiguracoesPage } from './configuracoes';
import { File } from '@ionic-native/file';

@NgModule({
  declarations: [
    ConfiguracoesPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfiguracoesPage),
  ],
  providers: [
    File
  ],
})
export class ConfiguracoesPageModule {}
