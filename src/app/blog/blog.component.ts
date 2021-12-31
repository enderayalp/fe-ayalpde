import {Component, OnInit} from '@angular/core';
import {Project} from "../shared/model/project";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  modalState: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  switchModalState() {
    this.modalState = !this.modalState;
    console.log(this.modalState)
  }
}
