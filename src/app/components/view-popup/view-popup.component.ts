import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCheckbox } from '@angular/material/checkbox';
import { Territory } from 'src/models/Territory';
import { faUser } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'app-view-popup',
  templateUrl: './view-popup.component.html',
  styleUrls: ['./view-popup.component.css']
})
export class ViewPopupComponent {
  imgUrl = `https://tm-api-brb9.onrender.com/cards/${this.data.tid}.png`
  isAssigned = this.data.publisher.name !== "No Publisher Assigned"
  faUser = faUser
  constructor(
    public dialogRef: MatDialogRef<ViewPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Territory,
  ){
    console.log(data)
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
