import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstApp';

  //interpolation example (DOM ---> COMPONENT)
  interpolatedValue = 'Interpolation example';

  //property binding (DOM ---> COMPONENT)
  boundPropertyImageURL = '/assets/pig.png';

  //event binding (COMPONENT ---> DOM)
  onClickEventBindingExample() {
    console.log('Event Binding Example');
  }

  //two-way data binding (DOM <---> COMPONENT)
  twoWayDataBindingValue = '';

}
