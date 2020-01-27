import { Component, OnInit } from "@angular/core";
import { UserService } from "@app/modules/user/services/user.service";
import { User } from "../../services/dto/resource";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { map } from "rxjs/operators";
import { pipe, Observable } from "rxjs";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: any; //User[] = [];
  private id: string;
  searchText: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  async ngOnInit() {
    this.users = await this.service.getAll();

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");
      console.log(this.id);
      let id = parseInt(this.id);
      // id = isNaN(id) ? 1 : id;
      if (!isNaN(id)) {
        this.user = this.users.find(user => user.id === id);
      }
    });
  }

  user: User = new User();
  private _isEditMode: boolean = false;
  get isEditMode(): boolean {
    return this._isEditMode || this.id === "new";
  }
  set isEditMode(isEdit) {
    this._isEditMode = isEdit;
  }

  onSubmit() {
    console.log(this.user);
    this.service.update(this.user);
    this.router.navigate(["/"]);
  }

  // get id() {
  //   return this.route.paramMap.subscribe((params: ParamMap) => {
  //     return params.get("id");

  //     //business logic what changes you want on the page with this new data.
  //   });
  // }
}
