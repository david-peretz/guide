import { Serializer } from "src/app/core/services/generic/serializer";
import { Supplier } from "../services/dto/resource";

export class SupplierSerializer implements Serializer {
  fromJson(json: any): Supplier {
    const supplier = new Supplier();
    supplier.id = json.id;
    supplier.name = json.name;
    supplier.address = json.address;
    supplier.phone = json.phone;
    supplier.email = json.email;
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
