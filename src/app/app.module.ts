import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { Page1 } from '../pages/page1/page1';
import { Registros } from '../pages/registros/registros';
import { CriarRegistros } from '../pages/criar-registros/criar-registros';

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Registros,
    CriarRegistros
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Registros,
    CriarRegistros
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
