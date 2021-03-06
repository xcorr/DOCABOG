import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class NoauthGuard implements CanActivate {
  
  constructor(private userService: UserService, private router: Router){}

  canActivate(): boolean {

    if(this.userService.logged()){
      this.router.navigate(['/dashboard'])
      return false;
    }else{
      return true;
    }

  }
}
