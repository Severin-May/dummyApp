import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../../records.service';

@Component({
  selector: 'app-emp-info',
  templateUrl: './emp-info.component.html',
  styleUrls: ['./emp-info.component.scss'],
  providers: [RecordsService]
})
export class EmpInfoComponent implements OnInit {

  userTestStatus: string = '';
  
  constructor(private recordService: RecordsService) { }

  ngOnInit(): void {
  }

  getUserStatusOnClick() {
    this.userTestStatus = this.recordService.getUserTestStatus();
  }
}
