import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "./modules/authentication/_services";
import { User } from "./modules/authentication/_models";

@Component({ selector: "app", templateUrl: "app.component.html" })
export class AppComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(
      x => (this.currentUser = x)
    );
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/authentication/login"]);
  }
}
