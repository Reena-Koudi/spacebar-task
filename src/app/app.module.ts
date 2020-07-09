import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { ClaimMessageComponent } from './claim-message/claim-message.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ClaimMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
