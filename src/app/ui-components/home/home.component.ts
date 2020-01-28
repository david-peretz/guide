import { Component } from "@angular/core";
import { first } from "rxjs/operators";

import { User } from "@app/interface/models";
import { UserService, AuthenticationService } from "@app/services";

@Component({ templateUrl: "home.component.html" })
export class HomeComponent {
  loading = false;
  users: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loading = true;
    this.userService
      .getAll()
      //.pipe(first())
      .then(users => {
        this.loading = false;
        this.users = users;
      });
  }
}
