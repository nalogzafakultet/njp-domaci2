import { Component, OnInit } from '@angular/core';
import {Recept} from '../../model/recipe.model';
import {RecipeService} from '../../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  private recepti: Recept[] = [];

  constructor(private service: RecipeService) { }

  ngOnInit() {
    this.loadRecipes();
  }

  loadRecipes() {
    this.service.getRecepti().subscribe(recepti => this.recepti = recepti);
  }

}
