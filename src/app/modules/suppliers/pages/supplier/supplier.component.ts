import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SuppliersService } from "../../services/suppliers.service";
import { Supplier } from "../../services/dto/resource";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-supplier",
  templateUrl: "./supplier.component.html",
  styleUrls: ["./supplier.component.css"]
})
export class SupplierComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: SuppliersService
  ) {}
  supplier: Supplier;
  async ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");
    if (!isNaN(id as any)) {
      const suppliers = await this.service.getAll();
      this.supplier = suppliers.find(supplier => supplier.id == parseInt(id));
    }
  }

  onSubmit(form: NgForm) {
    console.log("Hello " + JSON.stringify(form));
  }
}
