import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/model/project';

type ViewState = 'list' | 'details';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  project: Project;
  viewState: ViewState = 'list';

  constructor() {}

  showList(): void {
    this.viewState = 'list';
  }

  showDetails(project: Project): void {
    this.project = project;
    this.viewState = 'details';
  }

  ngOnInit(): void {}
}
