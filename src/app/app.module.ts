import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ClaimMessageComponent } from './claim-message/claim-message.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ClaimMessageComponent,
    SuccessMessageComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
