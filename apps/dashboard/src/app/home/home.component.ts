import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem-production-angular/api-interfaces';
import { WidgetsService } from '@fem-production-angular/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'fem-production-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  widgets$: Observable<Widget[]>;

  constructor(private widgetService: WidgetsService) {}

  ngOnInit(): void {
    this.loadWidgets();
  }

  loadWidgets() {
    this.widgets$ = this.widgetService.all();
  }
}
