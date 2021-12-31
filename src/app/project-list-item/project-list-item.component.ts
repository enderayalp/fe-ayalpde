import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Project } from '../shared/model/project';

@Component({
  selector: 'app-project-list-item',
  templateUrl: './project-list-item.component.html',
  styleUrls: ['./project-list-item.component.css'],
})
export class ProjectListItemComponent implements OnInit {
  @Input() project: Project;
  @Input() last: boolean;
  @Output() modalEvent = new EventEmitter<boolean>();
  modalState: boolean;

  constructor() {}

  ngOnInit(): void {}


  switchModalState() {
    this.modalState = !this.modalState;
    if(this.modalState){
      console.log("switch "+this.modalState)
      this.modalEvent.emit(this.modalState)
    }
    console.log(this.modalState)
  }
}
