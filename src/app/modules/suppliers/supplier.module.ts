import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SuppliersComponent } from "./pages/suppliers/suppliers.component";
import { SupplierComponent } from "./pages/supplier/supplier.component";
import { SupplierService } from "./services/supplier.service";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/core/pipes/filter.pipe";
const routes: Routes = [
  { path: "", component: SuppliersComponent },
  { path: ":id", component: SupplierComponent }
];
@NgModule({
  declarations: [SuppliersComponent, SupplierComponent, FilterPipe],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [SupplierService]
})
export class SupplierModule {}
