import { Component, OnInit } from '@angular/core';
import { Widget } from '@fem-production-angular/api-interfaces';

@Component({
  selector: 'fem-production-angular-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  widgets: Widget[] = [
    { id: '1', title: 'Widget 01', description: 'Pending' },
    { id: '2', title: 'Widget 02', description: 'Pending' },
    { id: '3', title: 'Widget 03', description: 'Pending' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
