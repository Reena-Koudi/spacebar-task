import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Subscription, interval, Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent implements OnInit {
  @Input()
  startAt = 1;

  @Output()
  counterState = new EventEmitter();

  currentValue = '';

  private currentSubscription: Subscription;

  constructor(private changeDetector: ChangeDetectorRef) {}
  ngOnInit(): void {}

  public start(): void {
    this.currentValue = this.formatValue(this.startAt);
    this.changeDetector.detectChanges();

    const t: Observable<number> = interval(1000);
    this.currentSubscription = t
      .pipe(take(this.startAt))
      .pipe(map((v) => this.startAt - (v + 1)))
      .subscribe(
        (v) => {
          this.currentValue = this.formatValue(v);
          this.changeDetector.detectChanges();
        },
        (err) => {
          this.counterState.error(err);
        },
        () => {
          this.currentSubscription.unsubscribe();
          this.currentValue = '00:00';
          this.counterState.emit('COMPLETE');
          this.changeDetector.detectChanges();
        }
      );
  }

  private formatValue(v): string {
    const minutes = Math.floor(v / 60);
    const formattedMinutes = '' + (minutes > 9 ? minutes : '0' + minutes);
    const seconds = v % 60;
    const formattedSeconds = '' + (seconds > 9 ? seconds : '0' + seconds);

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  public stop(): void {
    this.currentSubscription.unsubscribe();
    this.counterState.emit('ABORTED');
  }
}
