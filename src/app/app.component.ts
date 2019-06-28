import { Component } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Blog';
  constructor() {
    const firebaseConfig = {
      apiKey: 'AIzaSyB2u5PphnUZ29XCuStsL76gBtfoogyPGuw',
      authDomain: 'postapp-504ad.firebaseapp.com',
      databaseURL: 'https://postapp-504ad.firebaseio.com',
      projectId: 'postapp-504ad',
      storageBucket: '',
      messagingSenderId: '386880690749',
      appId: '1:386880690749:web:1dd6cc55415ae246'
    };
    firebase.initializeApp(firebaseConfig);
  }
}
