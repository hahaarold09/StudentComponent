import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { AddingComponent } from './entry/adding/adding.component';
import { PrintingComponent } from './entry/printing/printing.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AddingComponent,
    PrintingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
