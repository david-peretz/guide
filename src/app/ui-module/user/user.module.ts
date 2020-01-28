import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UserListComponent } from "@app/ui-components/user-list/user-list.component";
import { UserService } from "../../services/user/user.service";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/core/pipes/filter.pipe";
import { UserComponent } from "@app/ui-components/user/user.component";
const routes: Routes = [
  { path: "", component: UserListComponent },
  { path: ":id", component: UserListComponent }
];
@NgModule({
  declarations: [UserListComponent, UserComponent, FilterPipe],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [UserService]
})
export class UserModule {}
