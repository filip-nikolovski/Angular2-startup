import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpRequestService } from './http-request.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [HttpRequestService]
})
export class CoreModule { }
