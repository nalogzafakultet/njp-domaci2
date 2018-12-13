import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { Recept } from '../../model/recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import {Proizvod} from '../../model/proizvod.model';
import {ProizvodiService} from '../../services/proizvodi.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  private id: number;
  private editMode: boolean = false;

  private recept: Recept;

  private preostaliProizvodi: Proizvod[] = [];

  // private naziv: string;
  // private opis: string;
  // private proizvodi: Proizvod[];

  constructor(
    private location: Location,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private proizvodiService: ProizvodiService) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.loadRecept();
    this.loadProizvode();
  }

  loadRecept() {
    this.recipeService.getReceptById(this.id)
      .subscribe(recept => {
        this.recept = recept;
        this.loadProizvode();
      });
  }

  toggleEdit() {
    this.editMode = !this.editMode;
    this.loadData();
  }

  loadProizvode() {
    this.proizvodiService.getRemainingProizvodi(this.recept)
      .subscribe(proizvodi => {
        console.log('Proizvodi: ', proizvodi);
        this.preostaliProizvodi = proizvodi;
      });
  }

  saveRecept() {
    console.log('Saving recept: ', this.recept);
    this.recipeService.updateRecept(this.recept)
      .subscribe(recept => this.recept = recept);
    console.log('Updated recept: ', this.recept);
  }

  obrisiSastojak(proizvod: Proizvod) {
    if (!this.editMode) {
      return;
    }
    const index: number = this.recept.proizvodi.indexOf(proizvod);
    this.recept.proizvodi.splice(index, 1);
    this.preostaliProizvodi.push(proizvod);
  }
  dodajSastojak(proizvod: Proizvod) {
    const index: number = this.preostaliProizvodi.indexOf(proizvod);
    this.preostaliProizvodi.splice(index, 1);
    this.recept.proizvodi.push(proizvod);
  }
}
