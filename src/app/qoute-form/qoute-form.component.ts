import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quote } from '../quote';
import { DatepostedPipe } from '../dateposted.pipe';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class QouteFormComponent implements OnInit {
  
  newQuote= new Quote("","","");
  newDate = new Date();
@Output() addQoute = new EventEmitter<Quote>();
@Output() addTime = new EventEmitter<Date>();

  submitQoute(){
    this.addQoute.emit(this.newQuote);
    this.addTime.emit(this.newDate)
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
