import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Définir notre context de compilation
@NgModule({
  // Tous ce qui est visuel et qui appartient à ce module (composants; directives; pipes)
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  // déclenchement du premier composant
  bootstrap: [AppComponent]
})
export class AppModule { }
