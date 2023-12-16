import { Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';
import { RecipeComponent } from './components/recipe/recipe.component';
// import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'my-recipes', component: MyRecipesComponent, 
  // canActivate: [authGuard]
},
  { path: 'my-recipes/:id', component: RecipeComponent},
];
