import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '@fem-production-angular/core-data';
import { Observable } from 'rxjs';
import { Widget } from '@fem-production-angular/api-interfaces';

@Component({
  selector: 'fem-production-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  widgets$: Observable<Widget[]>;

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit(): void {
    this.widgets$ = this.widgetsService.all();
  }
}
