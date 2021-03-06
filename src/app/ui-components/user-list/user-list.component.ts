import { Component, OnInit, Input } from "@angular/core";
import { UserService } from "@app/services/user/user.service";
import { User } from "@app/interface/models/resource";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { map } from "rxjs/operators";
import { pipe, Observable } from "rxjs";
import { SearchComponent } from "@app/ui-components/search/search.component";
import { SearchService } from "@app/services/search/search.service";

@Component({
  selector: "user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"]
})
export class UserListComponent implements OnInit {
  searchText: string;
  searchText$: Observable<{ searchText: string }[]>;
  users: User[] = [];
  private id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService,
    private searchService: SearchService
  ) {
    this.searchText$ = searchService.getState();
    console.log(this.searchText$);
  }

  async ngOnInit() {
    this.users = await this.service.getAll();

    this.searchText$.subscribe(searchData => {
      this.searchText = searchData[0].searchText;
    });
    //    console.log(this.users);
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
