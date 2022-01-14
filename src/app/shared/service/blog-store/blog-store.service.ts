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
        title: "Postman Scripting",
        shortDescription: "In diesem Blog möchte ich euch zeigen wie ihr mit Postman Scripting die Ausführung der Requests programmatisch verändern könnt.",
        content: `<p><em>Der Blogeintrag ist noch in Arbeit und wird hier in k&uuml;rze erscheinen.</em></p>`
      },
      {
        title: "Business Exceptions sind eine schlechte Idee",
        shortDescription: "Hier möchte ich euch aufzeigen warum Exceptions eine schlechte Idee sind und wie man es besser machen kann.",
        content: "<p><em>Der Blogeintrag ist noch in Arbeit und wird hier in k&uuml;rze erscheinen.</em></p>"
      }
    ]

  }
}
