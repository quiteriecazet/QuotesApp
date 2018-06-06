import { Component, OnInit } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
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
  quotes: any = [];
  panelOpenState: false;

  constructor(private quotesService: QuotesService) {}

  ngOnInit() {}

  getQuotes(type, number) {
    console.log(type + ' et ' + number);

    const AllQuotes = forkJoin(
      this.quotesService.getQuotes(type, number, 1),
      this.quotesService.getQuotes(type, number, 2),
      this.quotesService.getQuotes(type, number, 3)
    ).subscribe(res => {
      console.log(res);
      const random: number = Math.floor(Math.random() * 2) + 1;
      for (let i = res.length; i > 0; i--) {
        this.quotes[i].push(0, res[0][random].quote);
        this.quotes[i].push(1, res[1][random].quote);
        this.quotes[i].push(2, res[2][random].quote);
      }
      console.log(this.quotes);
    });
  }
}
