import { Component, inject, OnInit } from '@angular/core';
import { NoteService } from '../../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesData } from '../../../models/notes.model';

@Component({
  selector: 'app-note-detail',
  imports: [],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.scss'
})
export class NoteDetailComponent implements OnInit {
  note: NotesData | null = null;

  private noteService = inject(NoteService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  ngOnInit(): void {
    const noteId = this.route.snapshot.params['id'];

    this.noteService.getNotebyId(noteId).subscribe(data => {
      this.note = data;
    })
  }

  goBack() {
    this.router.navigate(['/notes']);
  }

}
