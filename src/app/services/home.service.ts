import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServerInfo } from '../models/server-info';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  public getIndexFromExpress(): Observable<ServerInfo> {
    return this.httpClient.get<ServerInfo>('http://localhost:3000/');
  }
}
