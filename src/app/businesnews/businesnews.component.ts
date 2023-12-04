import { Component,OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'; 
@Component({
  selector: 'app-businesnews',
  templateUrl: './businesnews.component.html',
  styleUrls: ['./businesnews.component.css']
})
export class BusinesnewsComponent implements OnInit {
  constructor(private _services: NewsapiservicesService) {}

  businessnewsDisplay:any = [];

  currentPage: number = 1; 
  itemsPerPage: number = 8; 

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  ngOnInit(): void {
    this._services.businessNews().subscribe((result: any) => {
      this.businessnewsDisplay = result.articles;
    });
  }
}
