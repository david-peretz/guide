// import { Component, ViewEncapsulation } from "@angular/core";

// @Component({
//   selector: "app-root",
//   templateUrl: "./app.component.html",
//   styleUrls: ["./app.component.css"],
//   encapsulation: ViewEncapsulation.None
// })
// export class AppComponent {
//   isChecked = true;

//   onChange($event) {
//     console.log($event);
//   }
// }
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "./authentication/_services";

@Component({ selector: "app-root", templateUrl: "app.component.html" })
export class AppComponent {
  currentUser: any;

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
    this.router.navigate(["/login"]);
  }
}
