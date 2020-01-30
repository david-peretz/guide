import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "@app/ui-components/user-list/user-list.component";
import { UserService } from "../../services/user/user.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/core/pipes/filter.pipe";
import { UserComponent } from "@app/ui-components/user/user.component";
import { SearchComponent } from "@app/ui-components/search/search.component";
import { SearchService } from "@app/services/search/search.service";

const routes: Routes = [
  { path: "", component: UserListComponent },
  { path: ":id", component: UserListComponent }
];
@NgModule({
  declarations: [UserListComponent, UserComponent, SearchComponent, FilterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [UserService, SearchService]
})
export class UserModule {}
