import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-content',
  templateUrl: './quote-content.component.html',
  styleUrls: ['./quote-content.component.css']
})
export class QuoteContentComponent implements OnInit {
  // upVote: number;
  // downVote: number;

  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
      this.isComplete.emit(complete);
    }

  constructor() {
    // this.upVote = 0;
    //   this.downVote = 0
    }
    //
    // voteUp(): boolean {
    //   this.upVote += 1;
    //   return false;
    // }
    //
    // voteDown(): boolean {
    //   this.downVote += 1;
    //   return false;
    // }
  ngOnInit() {
  }

}
