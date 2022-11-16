import { Component, OnInit } from '@angular/core';
import {arrow} from "@popperjs/core";
import {CardComponent} from "../card/card.component";

class Card {
  titre!:string;
  description!:string;
  url!:string;
}

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  test!:number;
  cards!:Array<Card>;



  constructor() { }

  ngOnInit(): void {
    this.test = 5;
    this.cards = [
      {titre:'titre1', description:'description1', url:'https://picsum.photos/id/100/200/300'},
      {titre:'titre2', description:'description2', url:'https://picsum.photos/id/99/200/300'},
      {titre:'titre3', description:'description3', url:'https://picsum.photos/id/98/200/300'},
      {titre:'titre4', description:'description4', url:'https://picsum.photos/id/95/200/300'},
      {titre:'titre5', description:'description5', url:'https://picsum.photos/id/96/200/300'},
      {titre:'titre5', description:'description5', url:'https://picsum.photos/id/88/200/300'},
      {titre:'titre5', description:'description5', url:'https://picsum.photos/id/76/200/300'},
      {titre:'titre5', description:'description5', url:'https://picsum.photos/id/55/200/300'},

    ];

  }

}
