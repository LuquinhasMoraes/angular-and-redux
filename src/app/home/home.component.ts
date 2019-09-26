import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store, ActionReducer, Action } from '@ngrx/store';

export const counterReducer: ActionReducer<number> = (state: number = 0, action: Action) => {
  switch (action.type) {
    case 'INCREMENT':
        return state + 1;
    
    case 'DECREMENT':
      return state - 1;

    case 'RESET': 
      return 0;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public counter: Observable<number>;

  constructor(private store: Store<number>) {
    this.reset();
  }

  ngOnInit() {
    this.counter = this.store.select<number>('counter');
  }

  increment() {
    this.store.dispatch({type: 'INCREMENT'});
  }

  decrement() {
    this.store.dispatch({type: 'DECREMENT'});
  }

  incrementAsync() {
    setTimeout( () => {
      this.store.dispatch({type: 'INCREMENT'});
    }, 1000 );
  }

  decrementAsync() {
    setTimeout( () => {
      this.store.dispatch({type: 'DECREMENT'});
    }, 1000);
  }
  
  reset() {
    this.store.dispatch({type: 'RESET'});
  }
}
