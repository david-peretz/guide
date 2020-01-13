import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./pages/contact.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormBuilderModule } from "src/app/core/dynamic-form-builder/dynamic-form-builder.module";
import { AuthenticationService } from "./_services";
const routes: Routes = [
  { path: "", component: ContactComponent }
  // , { path: ":id", component: SupplierComponent }
];
@NgModule({
  declarations: [AuthenticationService],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule,
    RouterModule.forChild(routes)
  ],
  providers: [AuthenticationService]
})
export class AuthenticationModule {}
