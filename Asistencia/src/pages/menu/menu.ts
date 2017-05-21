import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

export class MenuPage {

  rootPage: any = PrincipalPage; //Pagina Principal
  tipo:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    this.tipo = this.navParams.get("Tipo");
    
    console.log("Desde el menu recibo: "+this.tipo);
  }
  Salir()
  {
    this.navCtrl.push(LoginPage);
  }

}
