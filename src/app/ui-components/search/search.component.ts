import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.less"]
})
export class SearchComponent implements OnInit {
  @Output("onSearch") eventSearch = new EventEmitter();
  results: any[] = [];
  searchText: FormControl = new FormControl();
  constructor() {}
  ngOnInit() {
    this.searchText.valueChanges.pipe(debounceTime(400)).subscribe(result => {
      this.eventSearch.emit(result);
      console.log(result);
    });
  }
}
// handleSubmit(input) {
//   this.event.emit(input);
// }
