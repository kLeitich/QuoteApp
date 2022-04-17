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
    
  ];

  toggleDetails(index:number){
    this.qoutes[index].showDescription = !this.qoutes[index].showDescription;
  }

  addNewQoute(quote:any){
    this.qoutes.push(quote)
  }
  // upvote(i) {
  //   this.quotes[i].upvotes ++;
  // }
  // downvote(i) {
  //   this.quotes[i].downvotes  ++;
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
