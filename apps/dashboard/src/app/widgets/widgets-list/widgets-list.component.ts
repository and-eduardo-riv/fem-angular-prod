import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from '@fem-production-angular/api-interfaces';

@Component({
  selector: 'fem-production-angular-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss'],
})
export class WidgetsListComponent implements OnInit {
  @Input() widgets: Widget[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
