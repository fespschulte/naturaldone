import { FormLeadComponent } from './form-lead/form-lead.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [	
    AppComponent,
    FormLeadComponent,
      HeaderComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    FormLeadComponent,
  ]
})
export class AppModule { }
