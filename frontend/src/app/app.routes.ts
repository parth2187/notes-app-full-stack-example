import { Routes } from '@angular/router';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteDetailComponent } from './components/note-detail/note-detail.component';
import { NoteCreateComponent } from './components/note-create/note-create.component';

export const routes: Routes = [
  {path:'', redirectTo: '/notes', pathMatch:'full'},
  {path:'notes', component:NoteListComponent},
  {path:'notes/create', component: NoteCreateComponent},
  {path: 'notes/:id', component: NoteDetailComponent},
  {path: '**', redirectTo: '/notes'}
];
