import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardPopupComponent } from './components/card-popup/card-popup.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tm-manager';

  constructor(private dialongRef : MatDialog){}

  openDialog(){
    this.dialongRef.open(CardPopupComponent)
  }
}
