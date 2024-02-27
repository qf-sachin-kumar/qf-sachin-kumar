import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FilterService {

  public _onSearch$: Subject<string> = new Subject();
  public _onSort$: Subject<string> = new Subject();
  
}
