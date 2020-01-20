import { Component, OnInit } from "@angular/core";
import { SupplierService } from "../../services/supplier.service";
import { Supplier } from "../../services/dto/resource";

@Component({
  selector: "app-suppliers",
  templateUrl: "./suppliers.component.html",
  styleUrls: ["./suppliers.component.css"]
})
export class SuppliersComponent implements OnInit {
  suppliers: Supplier[];
  constructor(private service: SupplierService) {}

  async ngOnInit() {
    this.suppliers = await this.service.getAll();
  }
}
