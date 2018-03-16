import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, NavParams} from 'ionic-angular';
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";
import {HomePage} from "../home/home";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  pass: any;
  myForm: any;
  validade: boolean = false;
  loading: boolean = false;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public authService: AuthServiceProvider,
              public menuCtrl: MenuController) {
        this.loading = false;
        this.menuCtrl.enable(false);
  }

  login(dados) {
      this.loading = true;
      this.authService.login(dados)
          .then(data  => {
              this.loading = false;
              if(data['login'] == "true"){
                  this.navCtrl.setRoot(HomePage, {'data': data['token']['data']});
              }else{
                  this.validade = true;
              }
          })
          .catch(e => console.log("login error 2", e));
  }


  valid(){
    if(this.username == null){
      console.log('erro');
    }


  }

}
