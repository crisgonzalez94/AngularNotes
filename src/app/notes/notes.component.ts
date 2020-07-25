import { Component, OnInit } from '@angular/core';
//Import class of notes
import { Note } from '../models/note.model';
//Import modules library


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  //Variables of form for create a new note
  public newNoteTitle:String;
  public newNoteDescription:String;


  public notes: Array<Note>;

  constructor() { 
    /*For the moment , we will go add a notes of testing , below */
    this.notes = [new Note( 
                    'Chores'  , 
                    'This is the note , for my chores on this weekend..' , 
                    [
                      'To wash the dishies', 
                      'put out the trash' , 
                      'to vacum the floor',
                      'to the laundry'
                    ] , 
                    '20-10-2020' 
                  ),
                  new Note(
                    'Things for to buy',
                    'It is been a long time since i made the purchases.',
                    [
                      'Meat',
                      'Vegetables' ,
                      'Sugar',
                      'Pasta',
                      'Cleaning products'
                    ],
                    '20-11-2020'
                  )
                  ]
  }

  ngOnInit(): void {
  }

  //This function is active when the user push the button of create note.
  addNote(){
    

    //console.log( toString(date.getDate()) +'-'+ toString(date.getMonth()) +'-'+ toString(date.getYear()));
    //let newNote = new Note( this.newNoteTitle , this.newNoteDescription ,  )


  }

}
