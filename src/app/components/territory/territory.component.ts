import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Territory } from 'src/models/Territory';
import { MatDialog } from '@angular/material/dialog';
import { CardPopupComponent } from '../card-popup/card-popup.component';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { Publisher } from 'src/models/Publisher';
import { EmailService } from 'src/app/services/email.service';
@Component({
  selector: 'app-territory',
  templateUrl: './territory.component.html',
  styleUrls: ['./territory.component.css']
})
export class TerritoryComponent {
  faPlus = faPlusCircle
  faCheckCircle = faCheckCircle
  @Input() territory!: Territory
  @Output() onUpdateTerritory: EventEmitter<Territory> = new EventEmitter()

  constructor(
    private dialogRef : MatDialog,
    private emailService : EmailService
    ){}
  isAssignedTo:boolean = false

  //emit onUpdateTerritory event
  //Here we send back an entirly new territory with the publishers data
  onUpdate(territory: Territory){
    this.onUpdateTerritory.emit(territory)
  }

  ngOnInit(): void{
    this.isAssignedTo = this.territory.publisher.name !== "No Publisher Assigned"
  }
  openDialog(){
    this.dialogRef.open(CardPopupComponent,{
      width:'450px',
      data: {territory:this.territory}
    }).afterClosed().subscribe(territoryDto => {

      //Set Territory fields
      this.territory.publisher = territoryDto.pubData
      this.territory.dateAssigned = territoryDto.dateAssigned

      this.isAssignedTo = this.territory.publisher.name !== "No Publisher Assigned"

      //If territory has assigned publisher raise update event and notify publisher
      if(this.isAssignedTo){
        //TODO err check for email not found, or no email provided
        if(territoryDto.willNotify) this.emailService.notifyPublisher(this.territory).subscribe(res =>{})
        this.onUpdate(this.territory)
      }
      
    })
  }
}
