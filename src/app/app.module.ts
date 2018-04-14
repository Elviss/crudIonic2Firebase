import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from "angularfire2";
import {ListaCarroPage} from "../pages/lista-carro/lista-carro";

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';

import {EditaCarroPage} from "../pages/edita-carro/edita-carro";

export const firebaseConfig = {
    apiKey: "INSERIR API KEY",
    authDomain: "INSERIR AUTH DOMAIS",
    databaseURL: "INSERIR DATABASE URL",
    projectId: "INSERIR PROJECT ID",
    storageBucket: "INSERIR STORAGE BUCKET",
    messagingSenderId: "INSERIR MESSAGING SENDER ID"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    ListaCarroPage,
      EditaCarroPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
      ListaCarroPage,
      EditaCarroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
