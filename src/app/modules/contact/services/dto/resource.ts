import { Resource } from "src/app/core/services/generic/resource";

export class User extends Resource {
  name: string;
  address: string;
  phone: string;
  email: string;
}
