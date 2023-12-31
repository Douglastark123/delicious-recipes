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
  selector: 'app-home',
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
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, AfterViewInit {
  recipe = {
    name: "Spicy Chicken Pasta",
    description: "Indulge in the flavors of this zesty and savory chicken pasta."
  }

  constructor(protected cookieService: CookieService) {}
  

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    feather.replace()
  }
  
}
