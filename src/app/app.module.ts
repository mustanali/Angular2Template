import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {AppComponent} from './app.component';
import {SampleComponent} from './components/sample.component';
import {LayoutExampleComponent} from './components/layout-example.component';
import {PostcardComponent} from './components/postcard.component';

@NgModule({
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AngularMaterialModule,
      FlexLayoutModule
  ],
  declarations: [
      AppComponent,
      SampleComponent,
      LayoutExampleComponent,
      PostcardComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
