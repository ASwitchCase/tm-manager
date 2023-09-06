import { Component,Input } from '@angular/core';
import { TerritoryService } from 'src/app/services/territory.service';
import { Territory } from 'src/models/Territory';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-territory-list',
  templateUrl: './territory-list.component.html',
  styleUrls: ['./territory-list.component.css']
})
export class TerritoryListComponent {
  @Input() color!: string;
  searchData: string = ""

  faSave = faSave
  faRefresh = faRefresh
  faSearch = faSearch

  tList: Territory[] = []
  tListBackup: Territory[] = []

  constructor(private territoryService: TerritoryService){}

  ngOnInit(): void{
    this.territoryService.getTerritories().subscribe((tList) =>{
      this.tList = tList
      this.tListBackup = tList
      
      console.log(tList)
    })
  }
  
  onUpdate(territory: Territory){
    //let target = this.tList.filter(t =>{return t.tid === territory.tid})[0]
    //update database
    console.log(territory)
    this.territoryService.updateTerritory(territory).subscribe(territory => {
      this.tList.forEach(t => {
        if(t.tid === territory.tid) t = territory
      })
    })
  
  }

  search(target: string): void{
    const newList: Territory[] = []
    this.tList.forEach(item => {
      if(item.tid.toLowerCase() === target.toLowerCase() || item.publisher.name.toLowerCase() === target.toLowerCase()){
        newList.push(item)
      }
    })
    
    if(newList.length > 0){
      this.tList = newList
    }else{
      this.tList = this.tListBackup
    }
    
  }

  refresh(): void{
    this.tList = this.tListBackup
  }

}
