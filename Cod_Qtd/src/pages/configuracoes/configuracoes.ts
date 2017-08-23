import { File } from '@ionic-native/file';
import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  saidaRb: string = "";
  rdButtonOpen: boolean;
  rdButtonResult = "dd/MM/aaaa";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public alertCtrl: AlertController, 
              private file: File) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracoesPage');
  }

  ngOnInit() {
    
    this.file.createFile(this.file.dataDirectory, '/Download/Teste.txt', false).then(
      (msg) => {
        console.log("sucesso");
      }
    ).catch(
      (err) => {
        console.log("erro");
      }
    )
    
    // this.file.listDir(this.file.applicationDirectory, '/Cache Storage').then(
    //   (files) => {
    //     console.log(files + " SUCESSO");
    //   }
    // ).catch(
    //   (err)=>{
    //     console.log(err + " ERRO" );
    //   }
    // );

    //this.file.checkDir(this.file.dataDirectory, '/system/').then(_ => console.log('directory exists')).catch(err=>console.log('directory doesnt exist'));
  }

  radioOption(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Formato da Data');

    alert.addInput({
      type: 'radio',
      label: 'dd/MM/aaaa',
      value: 'dd/MM/aaaa',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'MM/dd/aaaa',
      value: 'MM/dd/aaaa'
    });

    alert.addInput({
      type: 'radio',
      label: 'dd/MM',
      value: 'dd/MM'
    });

    alert.addInput({
      type: 'radio',
      label: 'dd/aaaa',
      value: 'dd/aaaa'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.rdButtonOpen = false;
        this.rdButtonResult = data;
      }
    });

    alert.present().then(() => {
      this.rdButtonOpen = true;
    });
    
  }

}
