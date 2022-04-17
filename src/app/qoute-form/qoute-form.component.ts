import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {
  
  newQuote= new Quote("","","");
@Output() addQoute = new EventEmitter<Quote>();

  submitQoute(){
    this.addQoute.emit(this.newQuote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
