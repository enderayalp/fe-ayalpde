import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../shared/model/project';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  @Input() project: Project;
  @Output() showListEvent = new EventEmitter<any>();

  constructor() {}

  showProjectList() {
    this.showListEvent.emit();
  }

  ngOnInit(): void {}
}
