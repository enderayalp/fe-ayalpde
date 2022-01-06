import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Blog} from "../../shared/model/blog";



@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogEntries: Blog[];
  @Output() showDetailsEvent = new EventEmitter<Blog>();

  constructor() {
  }

  ngOnInit(): void {
  }

  showDetails(blog: Blog) {
    this.showDetailsEvent.emit(blog);
  }


}
