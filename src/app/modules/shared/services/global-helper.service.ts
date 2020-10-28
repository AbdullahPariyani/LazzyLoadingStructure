import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalHelperService {
  selectRoute$ = new BehaviorSubject(null);
  constructor() { }
}
