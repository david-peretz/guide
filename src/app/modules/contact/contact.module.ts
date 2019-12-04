import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./pages/contact.component";

import { ContactService } from "./services/contact.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DynamicFormBuilderModule } from "src/app/core/dynamic-form-builder/dynamic-form-builder.module";
const routes: Routes = [
  { path: "", component: ContactComponent }
  // , { path: ":id", component: SupplierComponent }
];
@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DynamicFormBuilderModule,
    RouterModule.forChild(routes)
  ],
  providers: [ContactService]
})
export class ContactModule {}
