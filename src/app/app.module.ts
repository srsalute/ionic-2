import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { MyApp } from './app.component';


import { Page1 } from '../pages/page1/page1';
import { Registros } from '../pages/registros/registros';
import { CriarRegistros } from '../pages/criar-registros/criar-registros';

/*export function provideStorage() {
  return new Storage(['sqlite', 'websql', 'indexeddb'], { name: '__mydb' }// optional config);
}*/

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
  providers: [
  {
    provide: ErrorHandler,
    useClass: IonicErrorHandler,
    //provide: Storage,
    //useFactory: provideStorage
  },
  Storage
  ]
})
export class AppModule {}
