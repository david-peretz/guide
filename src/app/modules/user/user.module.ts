import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { UsersComponent } from "./pages/users/users.component";
import { UserComponent } from "./pages/user/user.component";
import { UserService } from "./services/user.service";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "src/app/core/pipes/filter.pipe";
const routes: Routes = [
  { path: "", component: UsersComponent },
  { path: ":id", component: UsersComponent }
];
@NgModule({
  declarations: [UsersComponent, UserComponent, FilterPipe],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [UserService]
})
export class UserModule {}
