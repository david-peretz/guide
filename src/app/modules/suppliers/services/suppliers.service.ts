import { ResourceService } from "src/app/core/services/generic/resource.service";
import { HttpClient } from "@angular/common/http";
import { Supplier } from "./dto/resource";
import { SupplierSerializer } from "./dto/serializer";
import { Injectable } from "@angular/core";

@Injectable()
export class SuppliersService extends ResourceService<Supplier> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "suppliers.json", new SupplierSerializer());
  }
}
