import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthComponent } from './auth/auth.component';
import { MyVocabularyComponent } from './my-vocabulary/my-vocabulary.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AlertComponent } from './shared/alert/alert.component';
import { ModalDirective } from './shared/modal/modal.directive';
import { MyTrainingComponent } from './my-training/my-training.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    MyVocabularyComponent,
    AlertComponent,
    ModalDirective,
    MyTrainingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
