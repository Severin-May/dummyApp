import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form, FormsModule } from '@angular/forms';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { FormComponent } from './form/form.component'; 

@NgModule({
  declarations: [
    AppComponent,
    EmpInfoComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
