import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../shared/model/project';
import { ProjectStoreService } from '../shared/service/project-store/project-store.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  hover?: number;
  projects: Project[];
  @Output() showDetailsEvent = new EventEmitter<Project>();
  isModal: boolean;

  constructor(private projectStoreService: ProjectStoreService) {
    this.hover = -1;
    this.projects = [];
  }

  showDetails(project: Project) {
    this.showDetailsEvent.emit(project);
  }

  setModal(isModal: boolean){
    this.isModal=isModal;
    console.log("isModal"+isModal)
  }
  ngOnInit(): void {
    this.projects = this.projectStoreService.getAllProjects();
  }
}
