import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Blog} from "../../shared/model/blog";


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  @Input() blog: Blog;
  @Output() showBlogListEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  showBlogList(){
    this.showBlogListEvent.emit();
  }

}
