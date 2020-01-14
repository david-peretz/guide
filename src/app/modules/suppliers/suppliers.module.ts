import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { SuppliersComponent } from "./pages/suppliers/suppliers.component";
import { SupplierComponent } from "./pages/supplier/supplier.component";
import { SuppliersService } from "./services/suppliers.service";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/core/pipes/filter.pipe";
const routes: Routes = [
  { path: "", component: SuppliersComponent },
  { path: ":id", component: SupplierComponent }
];
@NgModule({
  declarations: [SuppliersComponent, SupplierComponent, FilterPipe],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [SuppliersService]
})
export class SuppliersModule {}
