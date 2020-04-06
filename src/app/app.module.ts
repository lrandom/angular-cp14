import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { ListNoteComponent } from './list-note/list-note.component';
import { AtmComponent } from './atm/atm.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ImagePreviewComponent,
    ListNoteComponent,
    AtmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
