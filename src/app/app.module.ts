import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';


import { TestService } from './test/test.service';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [ //components directives and pipes
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule, 

    RouterModule.forRoot([
        {
          path: 'test',
          component: TestComponent
        }
      ])
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
