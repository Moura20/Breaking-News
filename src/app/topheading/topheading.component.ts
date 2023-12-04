import { Component,OnInit} from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';
@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  constructor(private _services: NewsapiservicesService) {}

  topHeadingDisplay:any = [];
  currentPage: number = 1; 
  itemsPerPage: number = 8; 

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  ngOnInit(): void {
    this._services.topHeading().subscribe((result: any) => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
    });
  }
}


