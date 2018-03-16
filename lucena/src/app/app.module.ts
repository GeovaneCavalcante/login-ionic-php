import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from "../pages/detail/detail";
import { LoginPage } from '../pages/login/login';
import { AddWorkPage} from "../pages/add-work/add-work";
import { UpdateWorkPage } from '../pages/update-work/update-work';

import {FormsModule} from "@angular/forms";

import {Storage} from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CalendarModule } from 'ion2-calendar/dist/calendar.module';
import { UnidadesProvider } from '../providers/unidades/unidades';
import { LoadingModule } from 'ngx-loading';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import {IonicStorageModule} from '@ionic/storage';
import {AuthHttp, AuthConfig,JwtHelper} from 'angular2-jwt';


let storage = new Storage({});

export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        noJwtError: true,
        globalHeaders: [{'Accept': 'application/json'}],
        tokenGetter: (() => storage.get('id_token')),
    }), http);
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    IonicStorageModule.forRoot(),
    FormsModule,
    HttpClientModule,
      LoadingModule.forRoot({
          backdropBackgroundColour: 'rgba(0,0,0,0.3)',
          backdropBorderRadius: '4px',
          primaryColour: '#ad148c',
          secondaryColour: '#ad148c',
          tertiaryColour: '#ad148c'
      }),
    IonicModule.forRoot(MyApp),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    JwtHelper,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
      {
          provide: AuthHttp,
          useFactory: getAuthHttp,
          deps: [HttpClient]
      },
    AuthServiceProvider
  ]
})
export class AppModule {}
