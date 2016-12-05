import { Component } from '@angular/core';
import { NoteService } from '../services'

@Component({
  selector: 'notes-container',
  styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
  `],
  template: require('./notes.html')
})
export class Notes {
  notes = []

  constructor(private notesService: NoteService){
    this.notesService.getNotes()
      .subscribe(resp => this.notes = resp.data)
  }

  onNoteChecked(note) {
    this.notesService.completeNote(note)
      .subscribe(note => {
        const i = this.notes.findIndex(localNote => localNote.id === note.id)
        this.notes.splice(i, 1);
      })
  }

  onCreateNote(note){
    this.notesService.createNote(note)
      .subscribe(note => this.notes.push(note));
  }
}
