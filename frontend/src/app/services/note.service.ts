import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { NotesData } from '../../models/notes.model';

interface AddNoteRequest {
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  // private dataUrl = 'assets/notes.json';
     private apiUrl = environment.apiUrl;


  constructor(private http:HttpClient) { }

  getAllNotes():Observable<NotesData[]>{
    return this.http.get<NotesData[]>(`${this.apiUrl}/notes`);
  }

  getNotebyId(id:string):Observable<NotesData> {
    return this.http.get<NotesData>(`${this.apiUrl}/notes/${id}`)
  }

  addNote(noteData: AddNoteRequest): Observable<NotesData[]> {
    return this.http.post<NotesData[]>(`${this.apiUrl}/notes`, noteData);
  }

  deleteNote(id: string): Observable<NotesData[]> {
    return this.http.delete<NotesData[]>(`${this.apiUrl}/notes/${id}`);
  }
}
