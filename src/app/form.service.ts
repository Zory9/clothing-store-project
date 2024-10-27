import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private formVisibility = new BehaviorSubject<boolean>(false);
  formVisibility$ = this.formVisibility.asObservable();

  public toggleForm(show: boolean): void {
    this.formVisibility.next(show);
  }
}