import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {


  quotes = [
    new Quote('Ian', '"Its not about ideas. Its about making ideas happen." ~Scott Belsky',new Date(2018,4,27)),
    new Quote('Kierian', '"A year from now you will wish you had started today." ~Karen Lamb',new Date(2018,4,20)),
    new Quote('Andrew', ' "Choose a job that you like, and you will never have to work a day in your life." ~Confucius',new Date(2018,4,14)),
    new Quote('Lisa', '"If Plan A doesn’t work, the alphabet has 25 more letters." ~Claire Cook',new Date(2017,3,15)),
    new Quote('Pri', '"Work hard, be kind, and amazing things will happen." ~Conan O’Brien',new Date(2017,2,15))
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
