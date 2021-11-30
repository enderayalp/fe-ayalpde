import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css'],
})
export class ProjectListComponent implements OnInit {
  hover?: number;
  projects: Project[];

  constructor() {
    this.hover = -1;
    this.projects = [];
  }

  ngOnInit(): void {
    this.projects = [
      {
        title: 'Baufinanzierung',
        customer: 'Finanzsector',
        description:
          'Green Field Scrum Projekt.\nUI Entwicklung nach Kundenvorgabe in JSF und Java.\n' +
          'Das Projekt umfasste mehr 5 Entwickler Teams mit jeweils 5-8 Personen.',
        from: '04/2014',
        to: '09/2016',
        role: 'Software Engineer',
        technologies: [
          'JSF',
          'CSS',
          'HTML',
          'Selenium',
          'Java',
          'SQL',
          'Maven',
          'Weblogic',
          'SVN',
          'JUnit',
          'IntelliJ',
          'SCRUM',
        ],
        tasks: [
          'Frontend-Entwicklung in JSF und Backend Entwicklung in Java und SQL.',
        ],
      },
      {
        title: 'Stücklistenauflösung',
        customer: 'Automobilhersteller',
        description:
          'Integration und Erweiterung der Entwicklung aus meiner\n' +
          'Diplomarbeit in ein Bedarfsmanagement-System von BMW.',
        from: '12/2010',
        to: '07/2013',
        role: 'Software Engineer',
        technologies: ['Java', 'C++', 'Maven', 'SVN', 'JUnit', 'JIRA', 'SCRUM'],
        tasks: [
          'Weiterentwicklung des bestehenden Systems zur Simulation von SupplyChains in C++',
          'Neuentwicklung einer Stücklistenauflösung in Java',
        ],
      },
      {
        title: 'Entwicklung von Simulationskomponenten',
        customer: 'TU Dortmund, Fachbereich Maschinenbau',
        description: 'Ein c++ Project',
        from: '03/2006',
        to: '09/2009',
        role: 'Software Engineer',
        technologies: ['C++', 'QT', 'VBA'],
        tasks: [
          'Entwicklung von Simulationskomponenten als Wissenschaftliche Hilfskraft',
        ],
      },
    ];
  }
}
