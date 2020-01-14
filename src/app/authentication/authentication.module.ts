import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./pages/login.component";
const routes: Routes = [
  { path: "", component: LoginComponent }
  // , { path: ":id", component: SupplierComponent }
];
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [LoginComponent]
})
export class AuthenticationModule {}
