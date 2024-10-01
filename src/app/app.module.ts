import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { FilsComponent } from './components/fils/fils.component';
import { PereComponent } from './components/pere/pere.component';
import { CvComponent } from './cv/cv/cv.component';
import { CvListComponent } from './cv/cv-list/cv-list.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './pipes/default-image.pipe';

// Définir notre context de compilation
@NgModule({
  // Tous ce qui est visuel et qui appartient à ce module (composants; directives; pipes)
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoWayComponent,
    RotatingCardComponent,
    FilsComponent,
    PereComponent,
    CvComponent,
    CvListComponent,
    CvItemComponent,
    CvCardComponent,
    NgStyleComponent,
    MiniWordComponent,
    LampeComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  // déclenchement du premier composant
  bootstrap: [AppComponent]
})
export class AppModule { }
