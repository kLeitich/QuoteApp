import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-qoute-details',
  templateUrl: './qoute-details.component.html',
  styleUrls: ['./qoute-details.component.css']
})
export class QouteDetailsComponent implements OnInit {
  @Input() quote!: Quote;

  upvotes=0;
  downvotes=0;

  
  constructor() { }

  ngOnInit(): void {
  }

}
