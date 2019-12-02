import { Component, OnInit } from "@angular/core";
import { SuppliersService } from "../../services/suppliers.service";
import { Supplier } from "../../services/dto/resource";

@Component({
  selector: "app-suppliers",
  templateUrl: "./suppliers.component.html",
  styleUrls: ["./suppliers.component.css"]
})
export class SuppliersComponent implements OnInit {
  suppliers: Supplier[];
  constructor(private service: SuppliersService) {}

  async ngOnInit() {
    this.isFirstLoad() && (await this.service.fetchData());
    this.suppliers = this.service.suppliers;
  }

  isFirstLoad() {
    return !(this.service.suppliers && this.service.suppliers.length > 0);
  }

  get search() {
    return;
  }
}
