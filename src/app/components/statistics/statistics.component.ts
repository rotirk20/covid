import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  results: any;
  country = 'Bosnia and Herzegovina';
  cases: any;
  todayCases: any;
  recovered: any;
  deaths: any;
  todayDeaths: any;
  countries = [];
  keyword = 'name';
  activeCases: any;
  allCases: any;
  allDeaths: any;
  allRecovered: any;
  updated: any;
  updateFormated: Date;
  constructor(public data: DataServiceService) { }

  ngOnInit() {
    this.data.getByCountry(this.country).subscribe((data: any) => {
      this.results = data;
      this.cases = data.cases;
      this.todayCases = data.todayCases;
      this.recovered = data.recovered;
      this.activeCases = data.active;
      this.deaths = data.deaths;
      this.todayDeaths = data.todayDeaths;
    });
    this.data.getAll().subscribe((data: any) => {
      for (let i = 0; i < data.length; i++) {
        this.countries.push(data[i].country);
      }
    });
    this.getWorldData();
  }

  getWorldData() {
    this.data.getWorldData().subscribe((data: any) => {
      this.allCases = data.cases;
      this.allDeaths = data.deaths;
      this.allRecovered = data.recovered;
      this.updated = data.updated;
      this.updateFormated = new Date(this.updated);
      console.log(this.updateFormated);
    });
  }

  selectEvent(item) {
    if (item) {
      this.data.getByCountry(item).subscribe((data: any) => {
        this.results = data;
        this.cases = data.cases;
        this.todayCases = data.todayCases;
        this.recovered = data.recovered;
        this.deaths = data.deaths;
        this.todayDeaths = data.todayDeaths;
      });
    }
  }

  onChangeSearch(val: string) {
  }

  onFocused(e) {
  }
}
