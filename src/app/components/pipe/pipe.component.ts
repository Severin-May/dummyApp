import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  dataToday: string = '';
  name: string = '';

  constructor() { }

  ngOnInit(): void {
    this.dataToday = new Date().toDateString();
    this.name = 'minihorse5';
  }

}
