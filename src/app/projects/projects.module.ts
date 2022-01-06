import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectComponent} from "./project/project.component";
import {ProjectListComponent} from "./project-list/project-list.component";
import {ProjectDetailsComponent} from "./project-details/project-details.component";
import {ProjectListItemComponent} from "./project-list-item/project-list-item.component";



@NgModule({
  declarations: [
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    ProjectListItemComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProjectsModule { }
