import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { Observable } from "rxjs";
import { SearchService } from "@app/services/search/search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.less"]
})
export class SearchComponent implements OnInit {
  searchState: Observable<{ searchText: string }[]>;
  searchText: FormControl = new FormControl();
  //constructor() {}

  constructor(private searchService: SearchService) {
    this.searchState = searchService.getState();
  }

  // store Action
  addSearch(searchText: string) {
    this.searchService.addSearch(searchText);
  }

  ngOnInit() {
    this.searchText.valueChanges
      .pipe(debounceTime(400))
      .subscribe(searchData => {
        this.addSearch(searchData);
        //  console.log(this.searchService.getValue());
      });
  }
}
