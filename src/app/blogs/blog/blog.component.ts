import {Component, OnInit} from '@angular/core';
import {Project} from "../../shared/model/project";
import {Blog} from "../../shared/model/blog";

type ViewState = 'list' | 'details';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogs: Blog;
  viewState: ViewState = 'list';

  constructor() {}

  showList(): void {
    this.viewState = 'list';
  }

  showDetails(blogs: Blog) {
    this.blogs = blogs;
    this.viewState = 'details';
  }

  ngOnInit(): void {
  }

}
