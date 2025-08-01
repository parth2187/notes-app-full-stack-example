import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface NotesData {
  id: number,
  content: string,
  title: string,
}

interface AddNoteRequest {
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private dataUrl = 'assets/notes.json';
  private url = 'http://localhost:3000/';

//   notes: NotesData[] = [
//   {
//     id: 1,
//     title: "Angular Best Practices",
//     content: "Always use OnPush change detection strategy for better performance. Use trackBy functions in *ngFor loops to optimize rendering."
//   },
//   {
//     id: 2,
//     title: "RxJS Operators",
//     content: "Remember to use switchMap for HTTP requests that can be cancelled, mergeMap for concurrent operations, and concatMap for sequential operations."
//   },
//   {
//     id: 3,
//     title: "TypeScript Tips",
//     content: "Use strict mode in tsconfig.json. Always define return types for functions and use interfaces for object structures."
//   },
//   {
//     id: 4,
//     title: "Component Communication",
//     content: "Use @Input() and @Output() for parent-child communication. For complex state management, consider using services with BehaviorSubject."
//   },
//   {
//     id: 5,
//     title: "Angular Forms",
//     content: "Reactive forms are preferred over template-driven forms for complex validation scenarios. Use FormBuilder service to create form groups efficiently."
//   }
// ];



  constructor(private http:HttpClient) { }

  getAllNotes():Observable<NotesData[]>{
    return this.http.get<NotesData[]>(`${this.url}notes`);
  }

  getNotebyId(id:number):Observable<NotesData> {
    return this.http.get<NotesData>(`${this.url}notes/${id}`)
  }

  addNote(noteData: AddNoteRequest): Observable<NotesData[]> {
    return this.http.post<NotesData[]>(`${this.url}notes`, noteData);
  }

  deleteNote(id: number): Observable<NotesData[]> {
    return this.http.delete<NotesData[]>(`${this.url}notes/${id}`);
  }
}
