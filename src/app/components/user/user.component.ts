import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { UserService } from "@app/modules/user/services/user.service";
import { User } from "@app/modules/user/services/dto/resource";
import { NgForm } from "@angular/forms";

@Component({
  selector: "user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  @Input("selectedUser") user: User;
  private _isEditMode: boolean = true;
  // user: User = new User();
  id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  get isEditMode(): boolean {
    return this._isEditMode || this.id === "new";
  }
  set isEditMode(isEdit) {
    this._isEditMode = isEdit;
  }

  async ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.id = params.get("id");
    //   if (this.id === "new") {
    //     this.user = new User();
    //     // let id = parseInt(this.id);
    //   } else if (!isNaN(parseInt(this.id))) {
    //     let id = parseInt(this.id);
    //     //id = isNaN(id) ? 1 : id;
    //     this.service.getAll().then(res => {
    //       this.user = res.find(user => user.id === id);
    //       console.log("selected User:" + this.user.fullName);
    //     });
    //   }
    // });
  }

  async onSubmitUser() {
    await this.service.update(this.user).subscribe(res => {
      console.log(res);
      this.user = res;

      this.isEditMode = false;
    });

    // this.router.navigate(["/"]);
  }

  // get id() {
  //   return this.route.snapshot.paramMap.get("id");
  // }
}
