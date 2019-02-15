import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumericalPasswordInputComponent } from './components/numerical-password-input/numerical-password-input.component';
import { PasswordViewerComponent } from './components/sub-components/password-viewer/password-viewer.component';
import { RandomizedNumericInputComponent } from './components/sub-components/randomized-numeric-input/randomized-numeric-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NumericalPasswordInputComponent,
    PasswordViewerComponent,
    RandomizedNumericInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
