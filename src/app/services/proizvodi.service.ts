import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Proizvod} from '../model/proizvod.model';
import {Observable} from 'rxjs';
import {
  GET_PROIZVODI_URL,
  GET_REMAINING_PROIZVODI,
  POST_NEW_PROIZVOD_URL
} from '../api/api.routes';
import {Recept} from '../model/recipe.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProizvodiService {

  constructor(private http: HttpClient) { }

  getAllProizvodi(): Observable<Proizvod[]> {
    return this.http.get<Proizvod[]>(GET_PROIZVODI_URL);
  }

  addNewProizvod(proizvod: Proizvod): Observable<Proizvod> {
    return this.http.post<Proizvod>(POST_NEW_PROIZVOD_URL, proizvod);
  }

  getRemainingProizvodi(recept: Recept): Observable<Proizvod[]> {
    return this.http.post<Proizvod[]>(GET_REMAINING_PROIZVODI, recept, httpOptions);
  }

  removeProizvod(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${GET_PROIZVODI_URL}/${id}`);
  }
}
