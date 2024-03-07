import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteAddComponent } from './Components/note-add/note-add.component';
import { NoteListComponent } from './Components/note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteAddComponent,
    NoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
