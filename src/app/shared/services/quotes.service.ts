import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { QuoteModel } from './../models/quote.model';
import { Quote } from './../../quote';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = 'http://localhost:3000/quotes';

@Injectable()
export class QuotesService {

  constructor(private http: HttpClient) { }

  getQuotes(type: string, number: number, order: number): Observable<Quote[]> {
    console.log(`hé c'est moi le service, tiens:` + type + ' eeeeet ' + number);
    return this.http.get<Quote[]>(API_URL + '?type=' + type + '&order=' + order + '&_limit=' + number);
  }
}

 /*for (let i = 0; i < number; i++) {
          for (let j = 0; j < (<any>results).length; j++) {
            let random: number = Math.floor(Math.random() * 5) + 1;
            while (quote.length < 3) {}
              if (<any>results[random].order == 1) {
                console.log((<any>results[j]).quote)
                quote.splice(0, 0, ((<any>results[j]).quote))
              }
              if (<any>results[random].order == 2) {
                console.log((<any>results[j]).quote)
                quote.splice(1, 0, ((<any>results[j]).quote))
              }
              if (<any>results[random].order == 3) {
                console.log((<any>results[j]).quote)
                quote.splice(2, 0,((<any>results[j]).quote))
              }
            quote.toString();
            quotes.push(quote);
          }
  }*/
