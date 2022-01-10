import {Injectable} from '@angular/core';
import {Blog} from "../../model/blog";

@Injectable({
  providedIn: 'root'
})
export class BlogStoreService {
  blogs: Blog[];

  getAllBlogs(): Blog[] {
    return this.blogs;
  }

  constructor() {
    this.blogs = [
      {
        title: "Comming Soon",
        content: "Blog Kurz-Beschreibung 1"
      },
      {
        title: "Comming Soon",
        content: "Blog Kurz-Beschreibung 2"
      }
    ]

  }
}
