import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
  // Initialize Firebase
  const config = {
    apiKey: 'AIzaSyBPvLXNCTgvqv-BS2QUwGUISXInbb_hxx0',
    authDomain: 'bookshelves-64e7d.firebaseapp.com',
    databaseURL: 'https://bookshelves-64e7d.firebaseio.com',
    projectId: 'bookshelves-64e7d',
    storageBucket: 'bookshelves-64e7d.appspot.com',
    messagingSenderId: '219288432735'
  };
  firebase.initializeApp(config);

  }
}
