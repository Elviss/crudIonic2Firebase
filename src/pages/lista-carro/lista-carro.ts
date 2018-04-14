import { Component } from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database-deprecated";

import { EditaCarroPage } from "../edita-carro/edita-carro";

export class Carro{
    id: string;
    dono: string;
    modelo: string;
    multa: boolean
}

/**
 * Generated class for the ListaCarroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-carro',
  templateUrl: 'lista-carro.html',
})
export class ListaCarroPage {
    lista: FirebaseListObservable<any>;
    carro: Carro;
    
  constructor(public af: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, public modal: ModalController) {
      this.lista = this.af.list('/carros');
      this.carro = new Carro();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaCarroPage');
  }
  
  cadastrar() {
      this.lista.push(this.carro).then(() => {
          this.carro = new Carro();
      })
  }

  editar(id){
    this.modal.create(EditaCarroPage, {id: id}).present();
  }
}

