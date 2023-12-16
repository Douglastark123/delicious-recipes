import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import * as feather from 'feather-icons';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-my-recipes',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    FormsModule
  ],
  providers: [CookieService],
  templateUrl: './my-recipes.component.html',
  styleUrl: './my-recipes.component.css'
})
export class MyRecipesComponent implements OnInit, AfterViewInit {
  recipe = {
    name: "Spicy Chicken Pasta",
    description: "Indulge in the flavors of this zesty and savory chicken pasta."
  }

  constructor(protected cookieService: CookieService) {}
  

  async ngOnInit(): Promise<void> {
    // const authToken = await this.cookieService.get('authToken')
    await this.loadMyRecipes("657cff46c64c457c520c8b66")
  }

  ngAfterViewInit(): void {
    feather.replace()
  }
  
  private async loadMyRecipes(id : string) {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}/recipes`)
      
      if(!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      console.log(data);      
      
    } catch (e) {
      console.error(e);
    }
  }
}
