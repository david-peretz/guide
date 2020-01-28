import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "@app/ui-components/home";
//import { LoginComponent } from "./login";
import { AuthGuard } from "./core/helpers";

const routes: Routes = [
  // {
  //   path: "authentication",
  //   loadChildren: () =>
  //     import("@app/modules/authentication/authentication.module").then(
  //       m => m.AuthenticationModule
  //     )
  // },
  {
    path: "authentication",
    loadChildren:
      "@app/ui-module/authentication/authentication.module#AuthenticationModule"
  },

  // {
  //   path: "users",
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import("@app/modules/user/user.module").then(m => m.UserModule)
  // },

  {
    path: "users",
    loadChildren: "@app/ui-module/user/user.module#UserModule"
  },
  // {
  //   path: "contact",
  //   loadChildren: () =>
  //     import("./modules/contact/contact.module").then(m => m.ContactModule)
  // },
  {
    path: "contact",
    loadChildren: "./ui-module/contact/contact.module#ContactModule"
  },
  // {
  //   path: "airport",
  //   loadChildren: () =>
  //     import("./modules/airports/airport.module").then(m => m.AirportModule)
  // },

  {
    path: "airport",
    loadChildren: "./ui-module/airports/airport.module#AirportModule"
  },

  // {
  //   path: "",
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import("./modules/user/user.module").then(m => m.UserModule)
  // }

  {
    path: "",
    canActivate: [AuthGuard],
    loadChildren: "./ui-module/user/user.module#UserModule"
  }
];
// const routes: Routes = [
//     { path: '', component: HomeComponent, canActivate: [AuthGuard] },
//     { path: 'login', component: LoginComponent },

//     // otherwise redirect to home
//     { path: '**', redirectTo: '' }
// ];

export const appRoutingModule = RouterModule.forRoot(routes);
