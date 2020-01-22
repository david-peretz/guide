import { User } from "./resource";
import { Serializer } from "src/app/core/services/generic/serializer";

export class SupplierSerializer implements Serializer {
  fromJson(json: any): User {
    const supplier = Object.assign(new User(), json);
    return supplier;
  }

  toJson(supplier: User): any {
    return {
      id: supplier.id,
      name: supplier.name,
      address: supplier.address,
      phone: supplier.phone,
      email: supplier.email
    };
  }
}
