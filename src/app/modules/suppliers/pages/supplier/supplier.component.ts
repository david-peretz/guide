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

  supplier: Supplier = new Supplier();
  private _isEditMode: boolean = false;
  get isEditMode(): boolean {
    return this._isEditMode || this.id.toString() === "new";
  }
  set isEditMode(isEdit) {
    this._isEditMode = isEdit;
  }

  async ngOnInit() {
    if (isNaN(this.id)) return;
    const suppliers = await this.service.getAll();
    this.supplier = suppliers.find(supplier => supplier.id === this.id);
    console.log(this.supplier);
  }

  onSubmit() {
    this.service.updateLocal(this.supplier);
  }

  get id() {
    return parseInt(this.route.snapshot.paramMap.get("id"));
  }
}
