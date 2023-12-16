import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';
  private accessTokenKey = 'authToken';
  // private token = '';


  constructor(private cookieService: CookieService) {}

  async signin(user: {
    email: string,
    password: string
  }): Promise<void> {
    try {
      const response = await fetch(`${this.apiUrl}/auth/login`, {
        method: 'POST',
        headers: {
          'content-type':	'application/json; charset=utf-8'
        },
        body: JSON.stringify(user),
      })
      
      if(!response.ok) {
        console.log(response);        
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const { access_token } = await response.json();

      // Save the JWT token in a cookie
      this.setAccessToken(access_token)
    } catch (e) {
      console.error(e);
    }
  }
  
  logout(): void {
    this.removeAccessToken()
  }
  
  async isAuthenticated(): Promise<boolean> {
    const tokenExists = this.cookieService.check(this.accessTokenKey);

    if(!tokenExists) return false;

    const isTokenValid = await fetch(`${this.apiUrl}/auth/validate`, {
      method: 'GET',
      headers: {
        'content-type' :	'application/json; charset=utf-8',
        'authorization': `Bearer ${this.getAccessToken}`
      },
    })

    console.log(isTokenValid);

    return false
  }
  
  private setAccessToken(_token: string): void {
    this.cookieService.set(this.accessTokenKey, _token)
  }
  
  private getAccessToken(): string | null {
    const token = this.cookieService.get(this.accessTokenKey)
    return token;
  }
  
  private removeAccessToken(): void {
    this.cookieService.delete(this.accessTokenKey)
  }
}
