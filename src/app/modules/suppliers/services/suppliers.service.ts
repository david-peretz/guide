import { ResourceService } from "src/app/core/services/generic/resource.service";
import { HttpClient } from "@angular/common/http";
import { Supplier } from "./dto/resource";
import { SupplierSerializer } from "./dto/serializer";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class SuppliersService extends ResourceService<Supplier> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "suppliers.json", new SupplierSerializer());
  }

  suppliers: Supplier[];

  async fetch() {
    await this.getAll();
  }

  getAll() {
    return this.list()
      .toPromise()
      .then(data => {
        this.suppliers = data;
      });
    // .subscribe(items => {
    //   this.suppliers = items;
    // });
  }
}
