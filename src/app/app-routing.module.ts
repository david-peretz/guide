import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
