import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('counter', { read: CounterComponent, static: true })
  private counter: CounterComponent;

  amount = 70;
  prize = 'Free Spins';
  game = 'Gemix';
  btnLabel = 'Claim now';
  isShow = false;

  ngOnInit(): void {
    this.counter.startAt = 60;
    this.counter.counterState.subscribe((msg) => {
      if (msg === 'COMPLETE') {
        console.log('Complete;');
      }
    });
    this.counter.start();
  }

  onClaimNow(): void {
    console.log('Btn Clicked');
    this.isShow = !this.isShow;
  }
}
