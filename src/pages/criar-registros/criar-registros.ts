import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { registroModel } from './registro-model';

@Component({
  selector: 'page-criar-regisros',
  templateUrl: 'criar-registros.html'
})

export class CriarRegistros {
  
  //private registro: registroModel;
  private myRegistro: FormGroup;
  private dataHoje: String;
  
  submitAttempt: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) { 
    
    //this.dataHoje = new Date().toISOString();
    
    this.myRegistro = formBuilder.group({
      nome: ['', Validators.compose([Validators.required])],
      //lastName: ['value', *validation function goes here*],
      //age: ['value', *validation function goes here*, *asynchronous validation function goes here*]
      data: [this.dataHoje = new Date().toISOString(), Validators.compose([Validators.required])]
    });
    
  }
  
  save(){}

}
