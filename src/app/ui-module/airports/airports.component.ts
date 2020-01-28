import { Component, OnInit } from "@angular/core";
import { AirportService } from "./airport.service";
import { Airport } from "./airport";
import { Observable } from "rxjs";

@Component({
  selector: "app-airports",
  templateUrl: "./airports.component.html",
  styleUrls: ["./airports.component.css"]
})
export class AirportsComponent implements OnInit {
  airports$: Observable<Airport[]>;

  constructor(private service: AirportService) {
    this.airports$ = service.getState();
  }

  // store Action
  addAirport(code: string, name: string) {
    this.service.addAirport(code, name);
  }

  ngOnInit() {}
}
