import { FormLeadComponent } from './form-lead/form-lead.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [		
    AppComponent,
    FormLeadComponent,
      HeaderComponent,
      FooterComponent
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
