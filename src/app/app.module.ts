import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { RecipeService } from './services/recipe.service';
import { HomeComponent } from './components/home/home.component';
import { AddRecipeComponent } from './components/add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { FormsModule } from '@angular/forms';
import { ProizvodiService } from './services/proizvodi.service';
import { AddProizvodComponent } from './components/add-proizvod/add-proizvod.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';
import { SearchProizvodComponent } from './components/search-proizvod/search-proizvod.component';


@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    NavigationComponent,
    RecipeComponent,
    HomeComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    AddProizvodComponent,
    SearchRecipeComponent,
    SearchProizvodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    RecipeService,
    ProizvodiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
