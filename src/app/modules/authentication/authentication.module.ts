import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { LoginComponent } from "./pages/login.component";
import { RegisterComponent } from "./pages/register.component";
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
  // , { path: ":id", component: SupplierComponent }
];
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild(routes)],
  providers: [LoginComponent, RegisterComponent]
})
export class AuthenticationModule {}
