import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AddRecipeComponent} from './components/add-recipe/add-recipe.component';
import {RecipeDetailsComponent} from './components/recipe-details/recipe-details.component';
import {AddProizvodComponent} from './components/add-proizvod/add-proizvod.component';
import {SearchRecipeComponent} from './components/search-recipe/search-recipe.component';
import {SearchProizvodComponent} from './components/search-proizvod/search-proizvod.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuardService as AuthGuard} from './services/authguard.service';
import {RegisterComponent} from './components/register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'add-recipe', component: AddRecipeComponent, canActivate: [AuthGuard] },
  { path: 'add-proizvod', component: AddProizvodComponent, canActivate: [AuthGuard] },
  { path: 'search-recipe', component: SearchRecipeComponent, canActivate: [AuthGuard] },
  { path: 'search-proizvod', component: SearchProizvodComponent, canActivate: [AuthGuard] },
  { path: 'recipe/details/:id', component: RecipeDetailsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
