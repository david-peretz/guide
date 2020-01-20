import { AirportService } from "./airport.service";
import { AirportsComponent } from "./airports.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [{ path: "", component: AirportsComponent }];

@NgModule({
  declarations: [AirportsComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  providers: [AirportService]
})
export class AirportModule {}
