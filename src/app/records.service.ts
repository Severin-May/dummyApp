import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  userTestStatus: { id: number, name: string }[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
  ];

  constructor() { }

  getUserTestStatus() {
    return this.userTestStatus.join("\n");
  }
}
