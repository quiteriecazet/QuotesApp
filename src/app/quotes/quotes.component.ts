import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule } from '@angular/forms';
import { Quote } from './../quote';
import { QuotesService } from './../shared/services/quotes.service';
import { QuoteModel } from './../shared/models/quote.model';
import { forkJoin } from 'rxjs/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: any[] = [];
  type: any;
  number: any;
  panelOpenState: false;
  private test: string;
  constructor(private quotesService: QuotesService) {}

  ngOnInit() {
    this.quotes = [];
    this.number = 0;
  }

  getQuotes(type, number) {
    this.quotes = [];
    console.log(type + ' et ' + number);
    const AllQuotes = forkJoin(
      this.quotesService.getQuotes(type, number, 1),
      this.quotesService.getQuotes(type, number, 2),
      this.quotesService.getQuotes(type, number, 3)
    ).subscribe(res => {
      console.log(res);
      while (number > 0) {
      for (let i = 0; i < res[0].length; i++) {
        this.quotes[i] = (res[0][Math.floor(Math.random() * res[0].length)].quote + ' '
         + res[1][Math.floor(Math.random() * res[1].length)].quote + ' '
         + res[2][Math.floor(Math.random() * res[2].length)].quote) + ' ';
      }
      number = number - 1;
    }
      console.log(this.quotes);
    });
  }

  removeQuotes(quotes, type, number) {
    this.quotes = [];
    this.type = undefined;
    this.number = 0;
  }
}
