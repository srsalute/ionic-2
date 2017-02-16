import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
//import { registroModel } from './registro-model';

@Component({
  selector: 'page-criar-regisros',
  templateUrl: 'criar-registros.html'
})

export class CriarRegistros {
  
  //private registro: registroModel;
  private myRegistro: FormGroup;
  private dataHoje: String;
  
  submitAttempt: boolean = false;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public storage: Storage) { 
    
    //this.dataHoje = new Date().toISOString();
    
    this.myRegistro = formBuilder.group({
      nome: ['', Validators.compose([Validators.required])],
      data: [this.dataHoje = new Date().toISOString(), Validators.compose([Validators.required])],
      //lastName: ['value', *validation function goes here*],
      //age: ['value', *validation function goes here*, *asynchronous validation function goes here*]
    });
    
    // set a key/value
    //storage.set('name', 'Max');
    //storage.set('nome', this.myRegistro.get('nome').value);
    
     // Or to get a key/value pair
    /*storage.get('name').then((val) => {
      console.log('Your name is', val);
    });*/
  
  }
  
  //setData(){}
    
  //getData(){}
  
  save(){
    
    this.storage.set('nome', this.myRegistro.get('nome').value);
    this.storage.set('data', this.myRegistro.get('data').value);
    console.log('Saved');
    /*this.submitAttempt = true;
 
    if(!this.slideOneForm.valid){
        this.signupSlider.slideTo(0);
    } 
    else if(!this.slideTwoForm.valid){
        this.signupSlider.slideTo(1);
    }
    else {
        console.log("success!")
        console.log(this.slideOneForm.value);
        console.log(this.slideTwoForm.value);
    }*/
  }
  
  show(){
    this.storage.get('nome').then((val) => {
      console.log('Your name is', val);
    });
    this.storage.get('data').then((val) => {
      console.log('And your data is', val);
    });
  }

}
