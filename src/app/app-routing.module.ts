import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddRecipeComponent} from './components/add-recipe/add-recipe.component';
import {RecipeDetailsComponent} from './components/recipe-details/recipe-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'recipe/details/:id', component: RecipeDetailsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
