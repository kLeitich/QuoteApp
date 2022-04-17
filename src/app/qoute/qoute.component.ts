import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  topQoute: Quote= new Quote("Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.","Bradley Whitford","Kevin Leitich");
  
  qoutes:Quote[]=[
    new Quote("Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.","Bradley Whitford","Kevin Leitich"),
    new Quote("Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.","Lao Tzu","Kevin Leitich"),
    new Quote("Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.","Norman Vincent Peale","Kevin Leitich"),
    new Quote("Consult not your fears but your hopes and your dreams. Think not about your frustrations, but about your unfulfilled potential. Concern yourself not with what you tried and failed in, but with what it is still possible for you to do.","Pope John XXII","Kevin Leitich"),
  ];

  toggleDetails(index:number){
    this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
  }

  addNewQoute(quote:any){
    let qouteLength =this.qoutes.length;
    quote.id = qouteLength+1;
    this.qoutes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
