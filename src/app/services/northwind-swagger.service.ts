import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { ProductDto } from '../models/northwind-swagger/product-dto';
import { ErrorHandlerService } from './error-handler.service';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Injectable({
  providedIn: 'root'
})
export class NorthwindSwaggerService {
  constructor(
    private http: HttpClient
  ) { }

  public getProductDtoList(): Observable<ProductDto[]> {
    return this.http.get<ProductDto[]>(`${API_ENDPOINT}/Products`)
      .pipe(catchError(ErrorHandlerService.handleError<ProductDto[]>('getProductDtoList', [])));
  }
}
