import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { LoadFactions, LoadSubfactions, LoadUnits } from './store/units/unit.actions';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKu_N7Nyaskx5Q_vooYa_tEkB45t-2U9I",
  authDomain: "niebelunggame.firebaseapp.com",
  projectId: "niebelunggame",
  storageBucket: "niebelunggame.appspot.com",
  messagingSenderId: "946038869683",
  appId: "1:946038869683:web:612b2c1dc7230b04722ac6",
  measurementId: "G-2HMHN57ZGK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private store: Store) { }




  ngOnInit(): void {
    this.store.dispatch(new LoadUnits());
    this.store.dispatch(new LoadFactions());
    this.store.dispatch(new LoadSubfactions());
  }
}
