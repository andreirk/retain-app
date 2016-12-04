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
        value: '',
        color: 'white'
    }

    colors: string[] = [
        "#b19cd9",
        "#ff6961",
        "#77dd77",
        "#aec6cf",
        ];


    fullForm: boolean = false;

    onCreateNote() {
        const { title, value, color  } =  this.newNote;

        if(title && value) {
            this.createNote.next({title, value, color})
        }
        this.reset()
        this.toggle(false);
    }

    reset(){
        this.newNote = {
            title: '',
            value: '',
            color: 'white'
        }
    }

    toggle(value: boolean){
        this.fullForm = value;
    }

    onColorSelected(color){
        this.newNote.color = color;
    }
}