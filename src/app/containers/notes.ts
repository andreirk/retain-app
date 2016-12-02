import { Component } from '@angular/core';


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
  notes = [
     {title: 'Chores', value: 'Don\'t forget to clean up', color: 'lighblue'},
     {title: 'saf', value: 'Don\'t forget eat up', color: 'red'},
     {title: 'Chosdfres', value: 'Don\'t forget walk up', color: 'blue'},
     {title: 'Chosdf', value: 'Don\'t forget to go home', color: 'yellow'},
  ]

  onNoteChecked(i: number) {
    this.notes.splice(i,1)
  }

  onCreateNote(note){
    this.notes.push(note)
  }
}
