import { Component, OnInit } from '@angular/core';
import {Recept} from '../../model/recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {ProizvodiService} from '../../services/proizvodi.service';
import {Proizvod} from '../../model/proizvod.model';

@Component({
  selector: 'app-search-proizvod',
  templateUrl: './search-proizvod.component.html',
  styleUrls: ['./search-proizvod.component.css']
})
export class SearchProizvodComponent implements OnInit {
  private izabraniRecepti: Recept[] = [];
  private sviRecepti: Recept[] = [];
  private sviProizvodi: Proizvod[] = [];
  private cachedProizvodi: Proizvod[] = [];
  private izabranaOpcija = 'nista';
  private searchName: string;
  private statusText: string;

  constructor(private receptService: RecipeService,
              private proizvodService: ProizvodiService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  handleSelect(value: string) {
    this.izabranaOpcija = value;
    this.searchName = '';
  }

  loadData() {
    this.proizvodService.getAllProizvodi()
      .subscribe(proizvodi => {
        this.sviProizvodi = proizvodi;
      });

    this.receptService.getRecepti()
      .subscribe(recepti => this.sviRecepti = recepti);
  }
  searchProizvodByName(name: string) {
    this.cachedProizvodi = this.sviProizvodi.filter(proizvod => proizvod.naziv.toLowerCase().indexOf(name.toLowerCase()) >= 0);
  }
  searchProizvodByRecepti(recepti: Recept[]) {
    this.cachedProizvodi = [];
    for (const recept of this.sviRecepti) {
      for (const proizvod of recept.proizvodi) {
        if (this.cachedProizvodi.indexOf(proizvod) === -1) {
          this.cachedProizvodi.push(proizvod);
        }
      }
    }
  }

  deleteProizvod(prozivod: Proizvod) {
    console.log('deleting proizvod: ', prozivod);
    this.proizvodService.removeProizvod(prozivod.id)
      .subscribe(status => {
        if (status) {
          this.statusText = 'Proizvod obrisan!';
        } else {
          this.statusText = 'Proizvod je vezan sa receptima, ne moze biti obrisan!';
        }

        this.loadData();
      });
  }

  izaberiRecept(recept: Recept) {
    const index: number = this.sviRecepti.indexOf(recept);
    this.sviRecepti.splice(index, 1);
    this.izabraniRecepti.push(recept);
  }

  obrisiRecept(recept: Recept) {
    const index: number = this.izabraniRecepti.indexOf(recept);
    this.izabraniRecepti.splice(index, 1);
    this.sviRecepti.push(recept);
  }
}
