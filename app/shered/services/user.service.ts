import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "@environments/environment";
import { User } from "@app/shered/models";

@Injectable({ providedIn: "root" })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(
      `https://reqres.in/api/users?page=1&per_page=1000`
    ); //`${environment.apiUrl}/users`);
  }

  register(user) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }

  delete(id) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`);
  }
}
