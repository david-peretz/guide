import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { User } from "../../services/dto/resource";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  user: User = new User();
  private _isEditMode: boolean = false;
  get isEditMode(): boolean {
    return this._isEditMode || this.id === "new";
  }
  set isEditMode(isEdit) {
    this._isEditMode = isEdit;
  }

  async ngOnInit() {
    debugger;
    const id = parseInt(this.id);
    if (isNaN(id)) return;
    const users = await this.service.getAll();
    this.user = users.find(user => user.id === id);
    console.log(this.user);
  }

  onSubmit() {
    console.log(this.user);
    this.service.updateLocal(this.user);
    this.router.navigate(["/"]);
  }

  get id() {
    return this.route.snapshot.paramMap.get("id");
  }
}
