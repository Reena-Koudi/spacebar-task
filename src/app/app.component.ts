import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

type Post = { amount: number; prize: string; game: string; countdown: number };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('counter', { read: CounterComponent, static: true })
  private counter: CounterComponent;

  title = 'spacebar-task';
  btnLabel = 'Claim now';
  isShow = false;
  post: Post;

  constructor(http: HttpClient) {
    const post$: Observable<Post> = http.get<Post>('/assets/data.json');
    post$.subscribe((post) => {
      this.post = post;
      console.log(post);
    });
  }

  ngOnInit(): void {
    this.counter.startAt = 60;
    this.counter.counterState.subscribe((msg): any => {
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

  onToggle(element, text): any {
    element.textContent = text;
    element.disabled = true;
  }
}
