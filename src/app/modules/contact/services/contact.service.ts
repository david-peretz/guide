import { GenericHttpService } from "src/app/core/services/generic/resource.service";
import { HttpClient } from "@angular/common/http";
import { Supplier } from "./dto/resource";
import { SupplierSerializer } from "./dto/serializer";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactService extends GenericHttpService<Supplier> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "suppliers.json", new SupplierSerializer());
  }

  private _suppliers: Supplier[] = [];
  get suppliers() {
    return this._suppliers;
  }

  async getAll(): Promise<Supplier[]> {
    if (this._suppliers.length === 0)
      this._suppliers = await this.list().toPromise();
    return this.suppliers;
  }

  updateLocal(supplier) {
    if (!supplier.id) this.suppliers.push(supplier);
    else if (!isNaN(supplier.id))
      this.suppliers[
        this.suppliers.findIndex(el => el.id === supplier.id)
      ] = supplier;
  }
}
