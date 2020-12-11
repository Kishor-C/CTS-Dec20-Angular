import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LengthFinder, PersonTitle } from './pipe-demo/length-finder';
import { XyzPipe } from './xyz.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PipeDemoComponent,
    LengthFinder, PersonTitle, XyzPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
