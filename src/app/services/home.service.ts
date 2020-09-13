import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from '../models/level';
import { ServerInfo } from '../models/server-info';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  public getIndexFromExpress(): Observable<ServerInfo> {
    return this.httpClient.get<ServerInfo>('http://localhost:3000/');
  }

  public getAllLevels(): Observable<Array<Level>> {
    return this.httpClient.get<Array<Level>>('http://localhost:3000/levels');
  }
}
