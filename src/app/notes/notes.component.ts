import { Component, OnInit } from '@angular/core';
//Import class of notes
import { Note } from '../models/note.model';
//Import class of work (each note has a work)
import { Work } from '../models/work.models';

import * as moment from 'moment';
import 'moment/locale/pt-br';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  //Variables of form for create a new note
  public newWork:string;
  public newNoteTitle:string;
  public newNoteDescription:string;


  public notes: Array<Note>;

  constructor() { 

    /*For the moment , we will go add a notes of testing , below */
    /*
    this.notes = [new Note(
                    'Things for to buy',
                    'It is been a long time since i made the purchases.',
                    [
                      {
                        'work': 'Wash the dishies',
                        'checked': false
                      }
                    ],
                    '20-11-2020'
                  )
                  ];
                  */

    
    

    if(typeof(Storage) != undefined){

      this.notes = JSON.parse(localStorage.getItem("angularNotes"));

      /*If is a first time that the user use this app , the localstorage ,
      will be empty , so we will make an note of example*/
      if(this.notes == null){
        this.notes =  [new Note(
                                'Things for to buy',
                                'It is been a long time since i made the purchases.',
                                [                 
                                  {
                                    'work': 'Wash the dishies',
                                    'checked': false
                                  }
                                ],
                                '20-11-2020'
                              )
                      ];


      }

    }          

  }

  ngOnInit(): void {
  }

  //This function is active when the user push the button of create note.
  addNote(){
    let date = moment().format("MMM Do YY");   

    /*This is a new object for save the new note makes for the user*/
    let newNote = {
      'title': this.newNoteTitle,
      'description': this.newNoteDescription,
      'works':  [
                ],
      'date': date
    }

    this.notes.push(newNote);

    //Update localstorage
    localStorage.setItem("angularNotes" , JSON.stringify(this.notes) );

  }

  //This function is for add work a note (recive as param the index of the note in array of notes)
  addWork(i){
    
    //If this.newNote isn't empty
    if(this.newWork != ''){
      //Add work
      this.notes[i].works.push(
                                {
                                  'work': this.newWork,
                                  'checked': false
                                }
                              );
    }
    
    //Update localstorage
    localStorage.setItem("angularNotes" , JSON.stringify(this.notes) );

  }

  //Function for check work of note
  checkWork(noteIndex , workNote){
    this.notes[noteIndex].works[workNote].checked = true;

    //Update localstorage
    localStorage.setItem("angularNotes" , JSON.stringify(this.notes) );
  }

  //Function for descheck note
  uncheckWork(noteIndex , workNote){
    this.notes[noteIndex].works[workNote].checked = false;

    //Update local storage
    localStorage.setItem("angularNotes" , JSON.stringify(this.notes) );
  }

  //Function for delete work
  deleteWork(noteIndex , workNote){

    this.notes[noteIndex].works.splice(workNote , 1);

    //Update localstorage
    localStorage.setItem("angularNotes" , JSON.stringify(this.notes) );
  }

  deleteNote(noteIndex){

    this.notes.splice(noteIndex , 1);

    //Update localstorage
    localStorage.setItem("angularNotes" , JSON.stringify(this.notes) );

  }

}
