import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-momemt-js',
  templateUrl: './momemt-js.component.html',
  styleUrls: ['./momemt-js.component.css']
})
export class MomemtJsComponent implements OnInit {

  currentMoment = moment().isoWeek(28)
  dateFormat = moment(this.currentMoment).format("YYYY-MM-DD");
  isoWeek = moment().isoWeek()
  
  add = moment().add(-6, 'days').format("YYYY-MM-DD");


  initPrevious = moment().add(-1, 'years').format("YYYY-MM-DD");
  endPrevious  = moment(this.initPrevious).add(-6, 'days').format("YYYY-MM-DD");


  start = moment().startOf('year').format("YYYY-MM-DD")
  end = moment().endOf('year').format("YYYY-MM-DD")

  constructor() { }

  ngOnInit() {}


}
