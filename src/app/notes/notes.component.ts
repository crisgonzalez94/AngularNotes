import { Component, OnInit } from '@angular/core';
//Import class of notes
import { Note } from '../models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

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

}
