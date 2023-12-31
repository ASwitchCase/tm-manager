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
//const user = creds

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://territory-api.azurewebsites.net/email'
  constructor(private http: HttpClient) { }

  notifyPublisher(territory: Territory) : Observable<Territory>{
    const mail = {
      recever: territory.publisher.email,
      subject:`Territory for ${territory.publisher.name}`,
      message: `
        Hello ${territory.publisher.name},\n 
        The Attached is a link to your assgined territory.\n
        \n

        Territory#: ${territory.tid}\n
        Link: ${territory.driveLink}\n 
      `
    }

    return this.http.post<Territory>(this.apiUrl,mail,httpOptions)
  }
}
