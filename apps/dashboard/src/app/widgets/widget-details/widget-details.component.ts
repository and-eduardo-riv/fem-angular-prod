import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Widget } from '@fem-production-angular/api-interfaces';

@Component({
  selector: 'fem-production-angular-widget-details',
  templateUrl: './widget-details.component.html',
  styleUrls: ['./widget-details.component.scss'],
})
export class WidgetDetailsComponent implements OnInit {
  @Input() widget: Widget;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
