import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreDataModule } from '@fem-production-angular/core-data';
import { UiToolbarModule } from '@fem-production-angular/ui-toolbar';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreDataModule, UiToolbarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
