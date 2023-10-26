import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreDataModule } from '@fem-production-angular/core-data';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreDataModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
