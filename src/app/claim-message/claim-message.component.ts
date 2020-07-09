import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-claim-message',
  templateUrl: './claim-message.component.html',
  styleUrls: ['./claim-message.component.scss'],
})
export class ClaimMessageComponent implements OnInit {
  @Input() amount: number;
  @Input() prize: string;
  @Input() game: string;

  constructor() {}

  ngOnInit(): void {}
}
