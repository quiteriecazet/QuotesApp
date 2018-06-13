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
    console.log(number + ` quotes from ` + type + ' are required');
    return this.http.get<Quote[]>(API_URL + '?type=' + type + '&order=' + order + '&_limit=' + number);
  }
}
