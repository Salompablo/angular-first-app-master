import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentListHeaderComponent } from './student-list-header/student-list-header.component';
import { PatataComponent } from './patata/patata.component';
import { OtherComponent } from './other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    StudentListComponent,
    StudentListHeaderComponent,
    PatataComponent,
    OtherComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
