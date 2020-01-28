import { GenericHttpService } from "@app/core/services/generic/generic-http.service";
import { HttpClient } from "@angular/common/http";
import { User } from "./dto/resource";
import { UserSerializer } from "./dto/serializer";
import { Injectable } from "@angular/core";

@Injectable()
export class ContactService extends GenericHttpService<User> {
  constructor(httpClient: HttpClient) {
    super(httpClient, "users.json", new UserSerializer());
  }

  private _users: User[] = [];
  get users() {
    return this._users;
  }

  async getAll(): Promise<User[]> {
    if (this._users.length === 0) this._users = await this.list().toPromise();
    return this.users;
  }

  updateLocal(user) {
    if (!user.id) this.users.push(user);
    else if (!isNaN(user.id))
      this.users[this.users.findIndex(el => el.id === user.id)] = user;
  }
}
