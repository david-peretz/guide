import { Store } from "../../store/store";
import { Airport } from "./Airport";

export class AirportService extends Store<Airport[]> {
  constructor() {
    super([{ code: "SMF", name: "Sacramento International" }]);
  }
  // store reducer generate new state
  addAirport(code: string, name: string) {
    const newState = [...this.getValue(), { code, name }];
    this.setState(newState);
  }
}
