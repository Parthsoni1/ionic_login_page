import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopupPageModule } from './pages/popup/popup.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './pages/popup/popup.component';
import { ServiceWorkerModule } from '@angular/service-worker';
@NgModule({
  declarations: [AppComponent,
    PopupComponent],
  entryComponents: [PopupComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'forcrud'),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  // exports: [PopupPageModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
