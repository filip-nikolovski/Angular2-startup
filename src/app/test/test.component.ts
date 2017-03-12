import { Component, OnInit } from '@angular/core';

import { TestService } from './test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private testService: TestService) { }

  ngOnInit() {

  	this.testService.getTestResult().subscribe(
  									this.getTestResultSuccess,
  									// result => console.log("result from service", result), 
  									error => console.log("error from service", error));
  }

  getTestResultSuccess(result){
  	 console.log("result from service", result)
  }
}
