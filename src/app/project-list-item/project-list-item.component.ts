import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../shared/model/project';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css'],
})
export class ProjectListItemComponent implements OnInit {
  @Input() project: Project;
  @Input() last: boolean;

  constructor() {}

  ngOnInit(): void {}
}
