import { Injectable } from '@angular/core';
import { HttpRequestService } from '../core/http-request.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class TestService {

  constructor(private httpRequestService: HttpRequestService) { }

  getTestResult(){

  	return this.httpRequestService.get('linq');
  }
}
