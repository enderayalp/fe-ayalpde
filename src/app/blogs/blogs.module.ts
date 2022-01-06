import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogListComponent } from './blog-list/blog-list.component';
import {BlogComponent} from "./blog/blog.component";
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListItemComponent } from './blog-list-item/blog-list-item.component';



@NgModule({
  declarations: [
    BlogComponent,
    BlogListComponent,
    BlogDetailComponent,
    BlogListItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BlogsModule { }
