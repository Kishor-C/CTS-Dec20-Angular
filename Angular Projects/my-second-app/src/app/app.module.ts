import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { LengthFinder, PersonTitle } from './pipe-demo/length-finder';
import { XyzPipe } from './xyz.pipe';
import { UserItemsComponent } from './user-items/user-items.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { PropertyBindComponent } from './property-bind/property-bind.component';
import { TwoWayDataBindComponent } from './two-way-data-bind/two-way-data-bind.component';
import { FormsModule } from '@angular/forms';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { ChildCounterComponent } from './child-counter/child-counter.component';
import { ParentCounterComponent } from './parent-counter/parent-counter.component';

@NgModule({
  declarations: [
    AppComponent,    HelloComponent, PipeDemoComponent,
    LengthFinder, PersonTitle, XyzPipe, UserItemsComponent, EventBindComponent, PropertyBindComponent, TwoWayDataBindComponent, UserListComponent, UserItemComponent, ChildCounterComponent, ParentCounterComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
