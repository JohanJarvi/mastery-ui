import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Level } from 'src/app/models/level';
import { ServerInfo } from 'src/app/models/server-info';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public express$: Observable<ServerInfo>;
  public levels$: Observable<Array<Level>>;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.express$ = this.homeService.getIndexFromExpress();
    this.levels$ = this.homeService.getAllLevels();
  }
}
