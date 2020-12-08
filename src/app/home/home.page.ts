import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/firebase/database';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(
    public afDB: AngularFireDatabase,
  ) {}

}
