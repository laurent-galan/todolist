import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


export const firebaseConfig = {
  apiKey: "AIzaSyB1l1jmRARtaykKa3mq7pwUuU2BYV0U6gk",
  authDomain:  "todolist-c0529.firebaseapp.com",
  databaseURL: "https://todolist-c0529-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "todolist-c0529",
  storageBucket: "todolist-c0529.appspot.com",
  messagingSenderId: "716297037185",
  appId: "1:716297037185:web:71acb300d335a542bc3480",
  measurementId: "G-FPSBVMBP1L"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  // AngularFireModule.initializeApp(firebaseConfig),
  // AngularFireDatabaseModule
  ],
  providers: [
    StatusBar,
    SplashScreen,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
