import { GenericHttpService } from "@app/core/services/generic/generic-http.service";
import { HttpClient } from "@angular/common/http";
import { User } from "../../interface/models/resource";
import { UserSerializer } from "./serializer";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService extends GenericHttpService<User> {
  constructor(httpClient: HttpClient) {
    // super(httpClient, "users.json", new UserSerializer());
    super(httpClient, "users?page=1&per_page=1000", new UserSerializer());
  }

  private _users: User[] = [];
  get users() {
    return this._users;
  }

  async getAll(): Promise<User[]> {
    if (this._users.length === 0) this._users = await this.list().toPromise();
    return this.users;
  }
  register(user) {
    // return this.http.post(`${environment.apiUrl}/users/register`, user);
    return this.create(user);
  }

  async delete(id) {
    return await this.delete(id).subscribe(res => {
      return res;
    });
    // return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
  // updateLocal(user) {
  //   if (!user.id) this.users.push(user);
  //   else if (!isNaN(user.id))
  //     this.users[this.users.findIndex(el => el.id === user.id)] = user;
  // }
}
