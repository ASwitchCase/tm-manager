import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Territory } from 'src/models/Territory';
import {HttpClient,HttpHeaders} from  '@angular/common/http'
import { Publisher } from 'src/models/Publisher';
import { creds } from 'testCreds';
const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

//Test Creds
const user = creds

@Injectable({
  providedIn: 'root'
})
export class TerritoryService {
  private apiUrl = 'https://territory-api.azurewebsites.net/territories'
  constructor(private http: HttpClient) { }

  getTerritories(): Observable<Territory[]>{
    return this.http.get<Territory[]>(this.apiUrl,httpOptions)
  }

  updateTerritory(territory: Territory): Observable<Territory>{
    const url = `${this.apiUrl}/${territory.tid}`
    const data = {
      username:user.username,
      password:user.password,
      newTerritory: territory
    }
    return this.http.put<Territory>(url,territory,httpOptions)
  }
}
