import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recept } from '../model/recipe.model';
import {
  GET_RECIPES_URL,
  POST_NEW_RECIPE_URL,
  SEARCH_RECIPES_URL,
  UPDATE_RECIPE_URL
} from '../api/api.routes';
import {Observable} from 'rxjs';
import {Proizvod} from '../model/proizvod.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {
  }

  getRecepti(): Observable<Recept[]> {
    return this.http.get<Recept[]>(GET_RECIPES_URL);
  }

  getReceptById(id: number): Observable<Recept> {
    return this.http.get<Recept>(`${GET_RECIPES_URL}/${id}`);
  }

  addNewRecept(recept: Recept): Observable<Recept> {
    return this.http.post<Recept>(POST_NEW_RECIPE_URL, recept, httpOptions);
  }

  searchReceptByName(name: string): Observable<Recept[]> {
    return this.http.get<Recept[]>(SEARCH_RECIPES_URL, {
      params: {
        name: name
      }
    });
  }
  searchReceptByProizvodi(proizvodi: Proizvod[]): Observable<Recept[]> {
    return this.http.post<Recept[]>(SEARCH_RECIPES_URL, proizvodi, httpOptions);
  }

  updateRecept(recept: Recept): Observable<Recept> {
    return this.http.post<Recept>(UPDATE_RECIPE_URL, recept);
  }
}

