import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {QuotesService} from './../shared/services/quotes.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {


  panelOpenState: boolean = false;
  hey = 'holaaa';


  constructor(private quotesService: QuotesService) { 
  }

  ngOnInit() {
  }
  /* L'idée : le number + le type passés en paramètre
  math random selon le nombre de citations relatives au type choisi */
  getQuotes = function(type, number) {
  console.log(type + " et pis " + number);
  this.quotesService.getQuotes(type, number)
  .map(
    (quotes) => {
      console.log('youpi ' + quotes);
      this.quotes = quotes;
      console.log('this.quotes ' + this.quotes);
    })
   .catch((error) => {
      console.log('error ' + error);
      throw error;
    });
}
}


