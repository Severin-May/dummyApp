import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form, FormsModule } from '@angular/forms';
import { EmpInfoComponent } from './components/emp-info/emp-info.component';
import { FormComponent } from './components/form/form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IntroComponent } from './components/intro/intro.component';
import { CoursesComponent } from './components/courses/courses.component';
import { FooterComponent } from './components/footer/footer.component'; 

@NgModule({
  declarations: [
    AppComponent,
    EmpInfoComponent,
    FormComponent,
    NavbarComponent,
    IntroComponent,
    CoursesComponent,
    FooterComponent
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
