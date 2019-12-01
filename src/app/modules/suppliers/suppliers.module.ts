import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SuppliersComponent } from "./pages/suppliers/suppliers.component";
import { SupplierComponent } from "./pages/supplier/supplier.component";

const routes: Routes = [
  { path: "", component: SuppliersComponent },
  { path: ":id", component: SupplierComponent }
];
@NgModule({
  declarations: [SuppliersComponent, SupplierComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SuppliersModule {}
