import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { NoteService } from '../../services/note.service';

interface NotesData {
  id: number,
  content: string,
  title: string,
}

@Component({
  selector: 'app-note-list',
  imports: [RouterLink, CommonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements OnInit {
  notes: NotesData[] = []

  private noteService = inject(NoteService);

 ngOnInit(): void {
  this.noteService.getAllNotes().subscribe(data => {
    this.notes = data;
  });
}


deleteNote(id: number, title: string) {
  Swal.fire({
    title: 'Confirmation',
    text: `Are you sure you want to delete "${title}"?`,
    icon: 'warning',
    confirmButtonText: 'Yes, Delete it!',
    confirmButtonColor: '#d33',
    showCancelButton: true,
    cancelButtonText: 'Cancel',
  }).then((result) => {
    if (result.isConfirmed) {
      this.noteService.deleteNote(id).subscribe(() => {
        Swal.fire('Deleted!', 'Your note has been deleted.', 'success');
        this.loadNotes();
      });
    }
  });
}

loadNotes() {
  this.noteService.getAllNotes().subscribe(data => {
    this.notes = data;
  })
}
}
