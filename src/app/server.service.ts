import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { map } from 'rxjs/operators';
import { CanActivate, ActivatedRouteSnapshot, ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient, private router: Router,
    private cookieService: CookieService) { }

    cookieValue: any;

  canActivate(route: ActivatedRouteSnapshot): boolean {
    this.cookieValue = this.cookieService.get('name');
    if (this.cookieValue === null || this.cookieValue === undefined || this.cookieValue === '') {
      this.router.navigate(['']);
      console.log(this.cookieValue);
    } else {
      return true
    }

  }

  register(user: User) {
    this.cookieService.set( 'name', user.name );
    this.router.navigate(['welcome']);
  }

  linkedInLogin() {
    return this.http.post('https://api.linkedin.com/v2/me', {})
      .pipe(map((response: any) => response
    ));
  }
}
