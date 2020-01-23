import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { User } from "../../services/dto/resource";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  private id: string;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  async ngOnInit() {
    this.users = await this.service.getAll();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get("id");

      let id = parseInt(this.id);
      id = isNaN(id) ? 1 : id;
      //if (isNaN(id)) return;
      //const users = await this.service.getAll();
      this.user = this.users.find(user => user.id === id);
      console.log(this.user);
    });
  }

  user: User = new User();
  private _isEditMode: boolean = true;
  get isEditMode(): boolean {
    return this._isEditMode || this.id === "new";
  }
  set isEditMode(isEdit) {
    this._isEditMode = isEdit;
  }

  onSubmit() {
    console.log(this.user);
    this.service.updateLocal(this.user);
    this.router.navigate(["/"]);
  }

  // get id() {
  //   return this.route.paramMap.subscribe((params: ParamMap) => {
  //     return params.get("id");

  //     //business logic what changes you want on the page with this new data.
  //   });
  // }
}
