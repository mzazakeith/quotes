import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes = [
    new Quote('My Name', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',new Date(2018,4,25)),
    new Quote('My Other Name', 'This is my other quote also very inspiring',new Date(2018,4,14)),
    new Quote('Another Name', 'This is another quote more inspiring',new Date(2020,3,15))
  ]

  deleteQuote(isDelete, index) {
    this.quotes.splice(index, 1)
  }

  addNewQuote(quote){
       this.quotes.push(quote)
   }


  constructor() { }

  ngOnInit() {

  }

}
