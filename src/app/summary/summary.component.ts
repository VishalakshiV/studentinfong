import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnChanges {

    @Input()studentList: any[];
    private ab = [];

  constructor() {
  }

  ngOnInit() {
      this.summaryOfStudent();
  }

   ngOnChanges(changes: SimpleChanges): void {
  }

  private summaryOfStudent() {
      const tempValue: [{std: number, boysCount: number, girlsCount: number}] = [];
      for (let i = 1 ; i <= 10 ; i++) {
          const a1 = this.studentList.filter(item => item.class === i) ;
          if (a1.length > 0) {
              this.ab.push(a1);
          }
      }
      for (let i = 0 ; i < this.ab.length ; i++) {
          let girlsCount = 0;
          let boysCount = 0;
          let std = 0;
          for (let j = 0; j < this.ab[i].length; j++) {
              std  = this.ab[i][j].class;
              if (this.ab[i][j].gender === 'female') {
                        girlsCount++;
              } else if (this.ab[i][j].gender === 'male') {
                        boysCount++;
              }
          }
          tempValue.push({std , girlsCount, boysCount});
      }
      this.ab = tempValue;
  }

}
