import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2/database-deprecated";
import {Carro} from "../lista-carro/lista-carro";

/**
 * Generated class for the EditaCarroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edita-carro',
  templateUrl: 'edita-carro.html',
})
export class EditaCarroPage {
  ref: FirebaseObjectObservable<any>;
  id: string;
  carro: Carro;
    
  constructor(public af: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {

      this.id = this.navParams.get('id');
      this.ref = this.af.database.object('/carros/' + this.id);
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaCarroPage');
  }

  salvar(){
    this.ref.update(this.carro).then(() => {
      this.viewCtrl.dismiss();
    });
  }

  fechar(){
    this.viewCtrl.dismiss();
  }

}
