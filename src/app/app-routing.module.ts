import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddRecipeComponent} from './components/add-recipe/add-recipe.component';
import {RecipeDetailsComponent} from './components/recipe-details/recipe-details.component';
import {AddProizvodComponent} from './components/add-proizvod/add-proizvod.component';
import {SearchRecipeComponent} from './components/search-recipe/search-recipe.component';
import {SearchProizvodComponent} from './components/search-proizvod/search-proizvod.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'add-proizvod', component: AddProizvodComponent },
  { path: 'search-recipe', component: SearchRecipeComponent },
  { path: 'search-proizvod', component: SearchProizvodComponent },
  { path: 'recipe/details/:id', component: RecipeDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
