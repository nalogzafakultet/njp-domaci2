import { Component, OnInit } from '@angular/core';
import {RecipeService} from '../../services/recipe.service';
import {ProizvodiService} from '../../services/proizvodi.service';
import {Proizvod} from '../../model/proizvod.model';
import {Recept} from '../../model/recipe.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  private preostaliProizvodi: Proizvod[] = [];
  private proizvodiZaRecept: Proizvod[] = [];
  private errorText = '';
  private naziv = '';
  private opis = '';

  constructor(private receptService: RecipeService,
              private proizvodiService: ProizvodiService,
              private router: Router) { }

  ngOnInit() {
    this.loadProizvodi();
  }

  loadProizvodi() {
    this.proizvodiService.getAllProizvodi()
      .subscribe(proizvodi => this.preostaliProizvodi = proizvodi);
  }

  addProizvod(proizvod: Proizvod) {
    const index: number = this.preostaliProizvodi.indexOf(proizvod);
    this.preostaliProizvodi.splice(index, 1);
    this.proizvodiZaRecept.push(proizvod);
  }

  removeProizvod(proizvod: Proizvod) {
    const index: number = this.proizvodiZaRecept.indexOf(proizvod);
    this.proizvodiZaRecept.splice(index, 1);
    this.preostaliProizvodi.push(proizvod);
  }

  sacuvajRecept() {
    if (!this.naziv || !this.opis) {
      this.errorText = 'Molimo Vas popunite sva polja!';
      return;
    }
    if (this.proizvodiZaRecept.length === 0) {
      this.errorText = 'Molimo Vas dodajte barem jedan recept!';
      return;
    }

    const recept: Recept = new Recept(this.naziv, this.opis, this.proizvodiZaRecept);
    console.log('Trying to add a new recept: ', recept);
    this.receptService.addNewRecept(recept)
      .subscribe(recipe => {
        this.naziv = recipe.naziv;
        this.opis = recipe.opis;
        this.proizvodiZaRecept = recipe.proizvodi;
        this.router.navigate(['']);
      });
  }

  reset() {
    this.naziv = '';
    this.opis = '';
    this.errorText = '';
    this.proizvodiZaRecept = [];
  }

}
