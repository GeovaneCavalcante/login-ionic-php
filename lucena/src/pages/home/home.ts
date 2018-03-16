import { ListPage } from '../list/list';
import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { CalendarComponentOptions } from 'ion2-calendar/dist/calendar.model';
import {Storage} from '@ionic/storage';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public menuCtrl: MenuController,  
              private storage: Storage) 
  {
    this.menuCtrl.enable(true);

  }

}
