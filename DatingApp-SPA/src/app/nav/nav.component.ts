import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public authService: AuthService,
    private alertifyService: AlertifyService,
    private router: Router) { }

  ngOnInit() {
  }

  public login() {
    this.authService.login(this.model).subscribe(
      next => {
        this.alertifyService.success('Login complete successfully');
      },
      error => {
        this.alertifyService.error('Error on login');
      },
      () => {
        this.router.navigate(['/members']);
      });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    this.alertifyService.message('Logout complete');
    this.router.navigate(['/home']);
  }

}
