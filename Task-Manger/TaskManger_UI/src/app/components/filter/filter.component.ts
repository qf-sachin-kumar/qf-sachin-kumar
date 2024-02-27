import { Component, OnChanges, OnInit } from '@angular/core';
import { FilterService } from './filter.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject, debounceTime, filter } from 'rxjs';

@Component({
  selector: 'todo-filter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent implements OnInit {

  public showOptions: boolean = false;
  public searchBox: FormControl = new FormControl('');

  constructor(private _filterSvc: FilterService) { }

  updateOrder(order: string) {
    this.showOptions = false;
    this._filterSvc._onSort$.next(order);
  }

  ngOnInit(): void {
    this._filterSvc._onSearch$ = this.searchBox.valueChanges.pipe(
      debounceTime(600),
      filter((value: string) => value.length > 2)
    ) as Subject<string>;
  }

}
