import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SupplierService } from "../../services/supplier.service";
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
    private router: Router,
    private service: SupplierService
  ) {}

  supplier: Supplier = new Supplier();
  private _isEditMode: boolean = false;
  get isEditMode(): boolean {
    return this._isEditMode || this.id === "new";
  }
  set isEditMode(isEdit) {
    this._isEditMode = isEdit;
  }

  async ngOnInit() {
    const id = parseInt(this.id);
    if (isNaN(id)) return;
    const suppliers = await this.service.getAll();
    this.supplier = suppliers.find(supplier => supplier.id === id);
    console.log(this.supplier);
  }

  onSubmit() {
    console.log(this.supplier);
    this.service.updateLocal(this.supplier);
    this.router.navigate(["/"]);
  }

  get id() {
    return this.route.snapshot.paramMap.get("id");
  }
}
