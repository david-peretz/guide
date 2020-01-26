import { User } from "./resource";
import { Serializer } from "src/app/core/services/generic/serializer";

export class UserSerializer implements Serializer {
  fromJson(json: any): User {
    const supplier = Object.assign(new User(), json);
    return supplier;
  }

  toJson(user: User): any {
    return {
      id: user.id,
      name: user.name,
      address: user.address,
      phone: user.phone,
      email: user.email
    };
  }
}
