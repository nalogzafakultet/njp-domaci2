import {Component, Input, OnInit} from '@angular/core';
import {Recept} from '../../model/recipe.model';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input("rcpt")
  recept: Recept;

  constructor() { }

  ngOnInit() {
  }

}
