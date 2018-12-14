import { Component, OnInit } from '@angular/core';
import {Recept} from '../../model/recipe.model';
import {Proizvod} from '../../model/proizvod.model';
import {ProizvodiService} from '../../services/proizvodi.service';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  private cachedRecepti: Recept[] = [];
  private sviRecepti: Recept[] = [];
  private izabranaOpcija = 'nista';
  private searchName: string;
  private sviProizvodi: Proizvod[] = [];
  private izabraniProizvodi: Proizvod[] = [];

  constructor(private receptService: RecipeService,
              private proizvodiService: ProizvodiService) { }

  ngOnInit() {
    this.loadData();
  }

  handleSelect(value: string) {
    this.izabranaOpcija = value;
    this.searchName = '';
  }

  loadData() {
    this.receptService.getRecepti()
      .subscribe(recepti => {
        this.sviRecepti = recepti;
      });

    this.proizvodiService.getAllProizvodi()
      .subscribe(proizvodi => this.sviProizvodi = proizvodi);
  }

  // Kapiram da se generalno ne radi ovako, neko se kesiraju recepti pa se iz frontenda filtrira niz ali OK
  searchByName(searchName: string) {
    this.receptService.searchReceptByName(searchName)
      .subscribe(recepti => this.cachedRecepti = recepti);
  }

  searchByProizvodi(searchProizvodi: Proizvod[]) {
    console.log('ABout to search: ', searchProizvodi);
    this.receptService.searchReceptByProizvodi(searchProizvodi)
      .subscribe(recepti => this.cachedRecepti = recepti);
  }
  izaberiProizvod(proizvod: Proizvod) {
    const index: number = this.sviProizvodi.indexOf(proizvod);
    this.sviProizvodi.splice(index, 1);
    this.izabraniProizvodi.push(proizvod);
  }

  obrisiProizvod(proizvod: Proizvod) {
    const index: number = this.izabraniProizvodi.indexOf(proizvod);
    this.izabraniProizvodi.splice(index, 1);
    this.sviProizvodi.push(proizvod);
  }
}
