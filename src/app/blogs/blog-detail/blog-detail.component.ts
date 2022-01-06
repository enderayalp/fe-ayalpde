import {Component, Input, OnInit} from '@angular/core';
import {Blog} from "../../shared/model/blog";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
