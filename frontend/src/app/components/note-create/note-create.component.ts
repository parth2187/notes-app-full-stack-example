import { Component, inject } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import Swal from 'sweetalert2'
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-create',
  imports: [FormsModule, RouterLink],
  templateUrl: './note-create.component.html',
  styleUrl: './note-create.component.scss'
})
export class NoteCreateComponent {
  private noteService = inject(NoteService);
  private router = inject(Router);

  title: string = "";
  content: string = "";

onSubmit(noteForm: any) {
  console.log(noteForm.value);

  this.noteService.addNote(noteForm.value).subscribe({
    next: (response) => {
      Swal.fire({
        title: "Successful",
        text: "Note saved successfully",
        icon: "success",
        confirmButtonText: "OK"
      });
      console.log('Note saved:', response);
      this.router.navigateByUrl('/notes');
    },
    error: (error) => {
      // Show error message if API fails
      Swal.fire({
        title: "Error",
        text: "Failed to save note",
        icon: "error",
        confirmButtonText: "OK"
      });
      console.error('Save failed:', error);
    }
  });
}

}
