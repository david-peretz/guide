import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SuppliersService } from "../../services/suppliers.service";
import { Supplier } from "../../services/dto/resource";

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
  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.supplier = this.service.suppliers.find(supplier => supplier.id == id);
  }
}