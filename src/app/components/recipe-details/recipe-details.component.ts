import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Recept} from '../../model/recipe.model';
import {RecipeService} from '../../services/recipe.service';
import { ActivatedRoute } from '@angular/router';
import {Proizvod} from '../../model/proizvod.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  private id: number;
  private editMode: boolean = false;

  private recept: Recept;

  // private naziv: string;
  // private opis: string;
  // private proizvodi: Proizvod[];

  constructor(
    private location: Location,
    private service: RecipeService,
    private route: ActivatedRoute) {
    this.id = +this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.loadRecept();
  }

  loadRecept() {
    this.service.getReceptById(this.id)
      .subscribe(recept => this.recept = recept);
  }

  toggleEdit() {
    this.editMode = !this.editMode;
  }

}
