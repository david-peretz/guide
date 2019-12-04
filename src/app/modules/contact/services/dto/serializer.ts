import { Supplier } from "./resource";
import { Serializer } from "src/app/core/services/generic/serializer";

export class SupplierSerializer implements Serializer {
  fromJson(json: any): Supplier {
    const supplier = Object.assign(new Supplier(), json);
    return supplier;
  }

  toJson(supplier: Supplier): any {
    return {
      id: supplier.id,
      name: supplier.name,
      address: supplier.address,
      phone: supplier.phone,
      email: supplier.email
    };
  }
}
