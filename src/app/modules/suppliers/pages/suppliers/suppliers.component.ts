import { Component, OnInit } from "@angular/core";
import { SuppliersService } from "../../services/suppliers.service";
import { Supplier } from "../../services/dto/resource";
import { map } from "rxjs/operators";

@Component({
  selector: "app-suppliers",
  templateUrl: "./suppliers.component.html",
  styleUrls: ["./suppliers.component.css"]
})
export class SuppliersComponent implements OnInit {
  suppliers: Supplier[];
  constructor(private service: SuppliersService) {}

  async ngOnInit() {
    if (this.service.suppliers && this.service.suppliers.length > 0) {
    } else {
      await this.service.fetch();
    }
    //console.log(this.service.suppliers);
    this.suppliers = this.service.suppliers;
  }
}
