import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatCheckbox } from '@angular/material/checkbox';
import { Publisher } from 'src/models/Publisher';

@Component({
  selector: 'app-card-popup',
  templateUrl: './card-popup.component.html',
  styleUrls: ['./card-popup.component.css']
})
export class CardPopupComponent {
  
  /*
    Data to be sent to territory component
  */
  territoryDto = {
    pubData :{
        name: "No Publisher Assigned",
        email: "none",
        phone: "none"
    },
    dateAssigned : new Date(),
    willNotify: false
  }
  
  constructor(
    public dialogRef: MatDialogRef<CardPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Publisher,
  ){}

  onCancel(): void {
    this.dialogRef.close();
  }
}
