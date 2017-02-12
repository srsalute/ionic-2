import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-regisros',
  templateUrl: 'registros.html'
})
export class Registros {
  selectedRegistro: any;
  icons: string[];
  registros: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedRegistro = navParams.get('registro');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.registros = [];
    for (let i = 1; i < 11; i++) {
      this.registros.push({
        title: 'Registro ' + i,
        note: 'Isso é um registro #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  registroTapped(event, registro) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(Registros, {
      registro: registro
    });
  }
}
