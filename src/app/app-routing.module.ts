import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteAddComponent } from './Components/note-add/note-add.component';
import { NoteListComponent } from './Components/note-list/note-list.component';

const routes: Routes = [
  { path: "", component:NoteAddComponent },
  { path: "list", component: NoteListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
