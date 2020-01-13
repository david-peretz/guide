import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./authentication/pages/login.component").then(
        m => m.LoginComponent
      )
  },
  {
    path: "suppliers",
    loadChildren: () =>
      import("./modules/suppliers/suppliers.module").then(
        m => m.SuppliersModule
      )
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./modules/contact/contact.module").then(m => m.ContactModule)
  },
  {
    path: "",
    loadChildren: () =>
      import("./modules/suppliers/suppliers.module").then(
        m => m.SuppliersModule
      )
  }
  // { path: '/', redirectTo: 'heroes', terminal: true },
  // { path: 'heroes', component: HeroComponent,
  //   children: [
  //     { path: '/', redirectTo: 'detail', terminal: true },
  //     { path: 'detail', component: HeroDetailComponent }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
