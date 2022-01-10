import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Blog} from "../../shared/model/blog";
import {BlogStoreService} from "../../shared/service/blog-store/blog-store.service";


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogEntries: Blog[];
  @Output() showDetailsEvent = new EventEmitter<Blog>();

  constructor(private blogStoreService: BlogStoreService) {
    this.blogEntries = [];
  }

  ngOnInit(): void {
    this.blogEntries = this.blogStoreService.getAllBlogs();
  }

  showDetails(blog: Blog) {
    this.showDetailsEvent.emit(blog);
  }


}
