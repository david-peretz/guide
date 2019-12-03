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
    this.suppliers = await this.service.getAll();
  }
}
