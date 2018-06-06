import {Component, OnInit} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {Quote} from './../quote';
import {QuotesService} from './../shared/services/quotes.service';
import {QuoteModel} from './../shared/models/quote.model';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [];
  panelOpenState: false;

  constructor(private quotesService: QuotesService) {
  }

  ngOnInit() {
  }

  getQuotes(type, number) {
  console.log(type + ' et pis ' + number);

  const example = forkJoin(
    this.quotesService.getQuotes(type, number, 1),
    this.quotesService.getQuotes(type, number, 2),
    this.quotesService.getQuotes(type, number, 3)
  );

  const subscribe = example.subscribe(val => console.log(val));

  /*
  this.quotesService.getQuotes(type, number).subscribe((quotes:  Quote[]) => {
    this.quotes = quotes;
    console.log(`they're back:`, this.quotes);

    const firstQuote = this.quotes[0];
    console.log('First quote id');

  });*/

};
}


