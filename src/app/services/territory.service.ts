import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Territory } from 'src/models/Territory';
import {HttpClient,HttpHeaders} from  '@angular/common/http'
import { Publisher } from 'src/models/Publisher';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

//Test Creds
const user = {
  "username": "znweke",
  "password": "isz30Uq3703h"
}

@Injectable({
  providedIn: 'root'
})
export class TerritoryService {
  private apiUrl = 'https://tm-api-brb9.onrender.com/territories'
  constructor(private http: HttpClient) { }

  getTerritories(): Observable<Territory[]>{
    return this.http.post<Territory[]>(this.apiUrl,user,httpOptions)
  }

  updateTerritory(territory: Territory): Observable<Territory>{
    const data = {
      username:user.username,
      password:user.password,
      newTerritory: territory
    }
    return this.http.put<Territory>(this.apiUrl,data,httpOptions)
  }
}
