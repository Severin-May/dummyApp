import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submit(login: any) {
    console.log("The form is submitted!", login);
    console.log("this is login info: ", login.form.value.email);
  }

}
