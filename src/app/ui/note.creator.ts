import { Component, Output, EventEmitter } from '@angular/core';



@Component ({
    selector: 'note-creator',
    template: require('./note.creator.html'),
    styles: [`
            .note-creator {
              padding: 20px;
              background-color: white;
              border-radius: 3px;
            }
            .title {
              font-weight: bold;
              color: rgba(0,0,0,0.8);
            }
            .full {
              height: 100px;
            }        
    `],
})
export class NoteCreator {
    @Output() createNote = new EventEmitter();
    constructor(){

    }
    newNote = {
        title: '',
        value: ''
    }

    onCreateNote() {
        const { title, value } =  this.newNote;

        if(title && value) {
            this.createNote.next({title, value})
        }
        this.reset()
    }

    reset(){
        this.newNote = {
            title: '',
            value: ''
        }
    }
}