import { Component,OnInit } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';


@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {
  constructor(private _services: NewsapiservicesService) {}

  sportsnewsDisplay:any = [];

  currentPage: number = 1; 
  itemsPerPage: number = 8; 

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  ngOnInit(): void {
    this._services.sportsNews().subscribe((result: any) => {
      this.sportsnewsDisplay = result.articles;
    });
  }
}