import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Territory } from 'src/models/Territory';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent {

  constructor(private dialogRef: MatDialogRef<CompleteComponent>,
  @Inject(MAT_DIALOG_DATA) public data: Territory,){}

  onCancel(): void {
    this.dialogRef.close();
  }
}
