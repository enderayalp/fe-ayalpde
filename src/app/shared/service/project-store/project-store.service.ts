import { Injectable } from '@angular/core';
import { Project } from '../../model/project';

@Injectable({
  providedIn: 'root',
})
export class ProjectStoreService {
  projects: Project[];

  getAllProjects(): Project[] {
    return this.projects;
  }

  constructor() {
    this.projects = [
      {
        title: 'Backend für Redakteure für die Erstellung von Angeboten',
        customer: 'Marketing Dienstleister',
        description:
          'Ein Kunde Marktführer im Bereich Mitarbeiterrabatte. ' +
          'Um diese Position weiterhin behaupten und ausbauen zu können, ' +
          'hat sich der Kunde zu einer Neuentwicklung der existierenden Softwareplattform ' +
          'und der zu Grunde liegenden Infrastruktur entschieden. DIese Neuentwicklung wird ' +
          'von adesso in den Bereichen Requirements Engineering, Business Analyse, ' +
          'Operations Management und der Softwareentwicklung unterstützt. Hierbei wird der ' +
          'Kunde bei der Aufnahme der Ist-Prozesse, Entwicklung optimierter Soll-Prozesse, ' +
          'der Implementierung der Software und dem Weiterbetrieb der "alten" Plattform bis zur ' +
          'Ablösung durch das neue Produkt, durch adesso unterstützt.',
        from: '08/2017',
        to: '08/2019',
        role: 'Software Engineer',
        technologies: [
          'Angular',
          'JavaScript',
          'CSS',
          'HTML',
          'Java',
          'TypeScript',
          'Microservices',
          'REST',
          'Spring DI, AOP, Boot',
          'SCRUM',
          'JIRA',
          'Maven',
          'GIT',
          'GITLab',
          'JUnit',
          'IntelliJ',
          'Kubernetes',
          'Keycloak',
          'Docker',
        ],
        tasks: [
          'Java Backend Entwicklung in Springboot.',
          'Schnittstellendesign und Implementierung.',
          'Auftragsanlage/Bearbeitung/Versionierung.',
          'Kundenanlage/Altkundenmigration.',
          'Diverse Produktfeatures.',
          'Datenbankentwurf.',
        ],
      },
      {
        title: 'Auftragstransparenz Komponente',
        customer: 'Telekommunikationsunternehmen',
        description:
          'Green Field Scrum Projekt. Neuentwicklung eines Portals (intern und extern)\n' +
          'für Auftragsabwicklung im E2E Bereich. Design und Entwicklung von\n' +
          'Microservices, Frontend und Backend.',
        from: '08/2020',
        to: '01/2022',
        role: 'Software Engineer',
        technologies: [
          'Springboot',
          'Java',
          'Maven',
          'Git',
          'Rest',
          'OpenApi 3.0',
          'JPA',
          'Spring Data',
          'JIRA',
          'SCRUM',
          'Nexus',
          'Jenkins',
          'Bitbucket',
          'JUnit',
          'Postman',
          'Spring DI',
        ],
        tasks: [
          'Koordinierung der Entwicklung in den Sprints.',
          'Rechtzeitige Eskalation von Impediments die das Sprintziel gefährden.',
          'Analyse der Anforderung und Kommunikation mit der Fachseite mit den Themen (Impediments, bestehende Lösungen, Machbarkeit, Abhängigkeiten, Lösungsvorschläge).',
          'Entwicklung im Frontend und Backend',
          'Unterstützung der Teamkollegen bei fachspezifischen Problemen',
          'Bearbeitung komplexer Aufgaben, Fehleranalyse und Fehlerbeseitigung',
        ],
      },
      {
        title: 'Baufinanzierung',
        customer: 'Finanzsektor',
        description:
          'Green Field Scrum Projekt.\nUI Entwicklung nach Kundenvorgabe in JSF und Java.\n' +
          'Das Projekt umfasste mehr 5 Entwickler Teams mit jeweils 5-8 Personen.',
        from: '04/2014',
        to: '09/2016',
        role: 'Software Engineer',
        technologies: [
          'Java',
          'Microservices',
          'REST',
          'SQL',
          'SOAP',
          'SPRING',
          'JIRA',
          'AOP',
          'Maven Archetyp',
          'GITLab',
          'IntelliJ',
          'Maven',
          'GIT',
          'SCRUM',
        ],
        tasks: [
          'Frontend-Entwicklung in JSF und Backend Entwicklung in Java und SQL.',
        ],
      },
      {
        title: 'Electronic Point of Sales',
        customer: 'Telekommunikationsunternehmen',
        description:
          'Frontend Kundenverwaltungssystem. Anbindung neuer Services\n' +
          'aus MCE (siehe nachfolge Projekt) wie z.B. Bankdatenvalidierung,\n' +
          'Adressabgleich, Fraudprävention und Entwicklung der UI.',
        from: '10/2016',
        to: '03/2017',
        role: 'Software Engineer',
        technologies: [
          'Java',
          'Wicket',
          'REST',
          'JBoss',
          'Maven',
          'GIT',
          'SCRUM',
          'JIRA',
          'GITLab',
          'IntelliJ',
        ],
        tasks: ['Frontend- und Backend-Entwicklung.'],
      },
      {
        title: 'Baufinanzierung',
        customer: 'Finanzsektor',
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
