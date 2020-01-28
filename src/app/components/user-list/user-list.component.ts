import { Component, OnInit } from "@angular/core";
import { UserService } from "@app/modules/user/services/user.service";
import { User } from "@app/modules/user/services/dto/resource";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { map } from "rxjs/operators";
import { pipe, Observable } from "rxjs";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
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
      if (this.id === "new") {
        this.user = new User();
      } else {
        let id = parseInt(this.id);
        // id = isNaN(id) ? 1 : id;
        if (!isNaN(id)) {
          this.user = this.users.find(user => user.id === id);
        }
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

  async onSubmitUsers() {
    //console.log(this.user);
    if (this.id === "new") {
      await this.service.create(this.user).subscribe(res => {
        console.log(res);
        this.user = res;
        this.users.push(res);
        this.isEditMode = false;
      });
    }

    //this.router.navigate(["/"]);
  }

  // get id() {
  //   return this.route.paramMap.subscribe((params: ParamMap) => {
  //     return params.get("id");

  //     //business logic what changes you want on the page with this new data.
  //   });
  // }
}
