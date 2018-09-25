import { Component, OnInit } from '@angular/core';
import { TestSuite } from '../../classes/test-suite';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  newSuite: TestSuite;
  suites: TestSuite[];

  constructor() { }

  ngOnInit() {
  }

  

}

// function createSuite(): TestSuite{

//     return new TestSuite();
// }