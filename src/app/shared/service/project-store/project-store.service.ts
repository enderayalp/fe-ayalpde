import {Injectable} from '@angular/core';
import {Project} from '../../model/project';

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
        title: 'Werbeplatform',
        customer: 'Marketing Dienstleister',
        shortDescription: 'Webplatform für die Erstellung und Pflege von Werbungen und Rabatten für Den Endverbraucher',
        description:
          'Ein Kunde Marktführer im Bereich Werbeplatform mit dem Focus auf Rabatte für Endverbraucher. ' +
          'Um diese Position weiterhin behaupten und ausbauen zu können, ' +
          'hat sich der Kunde zu einer Neuentwicklung der existierenden Softwareplattform ' +
          'und der zu Grunde liegenden Infrastruktur entschieden. Diese Neuentwicklung wird ' +
          'von adesso in den Bereichen Requirements Engineering, Business Analyse, ' +
          'Operations Management und der Softwareentwicklung unterstützt. Hierbei wird der ' +
          'Kunde bei der Aufnahme der Ist-Prozesse, Entwicklung optimierter Soll-Prozesse, ' +
          'der Implementierung der Software und dem Weiterbetrieb der "alten" Plattform bis zur ' +
          'Ablösung durch das neue Produkt unterstützt.',
        from: 'August 2017',
        to: 'August 2019',
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
        shortDescription: 'Neuentwicklung eines Portals für Auftragsabwicklung im E2E Bereich',
        description:
          'Green Field Scrum Projekt. Neuentwicklung eines Portals (intern und extern)\n' +
          'für Auftragsabwicklung im E2E Bereich. Design und Entwicklung von\n' +
          'Microservices, Frontend und Backend.',
        from: 'August 2020',
        to: 'Januar 2022',
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
        title: 'Electronic Point of Sales (EPOS)',
        customer: 'Telekommunikationsunternehmen',
        shortDescription: 'Neuentwicklung eines Portals für eine Auftragsabwicklung im E2E Bereich',
        description:
          'Frontend Kundenverwaltungssystem. Anbindung neuer Services\n' +
          'aus MCE (siehe nachfolge Projekt) wie z.B. Bankdatenvalidierung,\n' +
          'Adressabgleich, Fraudprävention und Entwicklung der UI.',
        from: 'Oktober 2016',
        to: 'März 2017',
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
        customer: 'Bankensektor',
        shortDescription: 'Applikation für die Unterstützung des Bankmitarbeiters bei der Abwicklung eines gesamten Baufinanzierungsprozesses',
        description:
          'Green Field Scrum Projekt. ' +
          'Die Applikation deckt den gesamten Kreditlebenszyklus ab. ' +
          'Von der Kreditantragsprüfung über die Bearbeitung und Verwaltung ' +
          'aller notwendigen Daten, unterstützt die Anwendung den Bankmitarbeiter ' +
          'Schritt für Schritt durch den Baufinanzierungsprozess',
        from: 'April 2014',
        to: 'September 2016',
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
        title: 'Stücklistenauflösung',
        customer: 'Automobilhersteller',
        shortDescription: 'Stücklistenauflösung von Fahrzeugen  mit dem Ziel eine gute Prognose für den Teilebedarf ' +
          'für sowohl den kurzfristigen als auch den mittel und langfristigen Planungshorizont zu ermitteln ',
        description:
          'Integration und Erweiterung der Entwicklung aus meiner\n' +
          'Diplomarbeit in ein Bedarfsmanagement-System.',
        from: 'Dezember 2010',
        to: 'Juli 2013',
        role: 'Software Engineer',
        technologies: ['Java', 'C++', 'Maven', 'SVN', 'JUnit', 'JIRA', 'SCRUM'],
        tasks: [
          'Weiterentwicklung des bestehenden Systems zur Simulation von SupplyChains in C++',
          'Neuentwicklung einer Stücklistenauflösung in Java',
        ],
      },
      {
        title: 'Entwicklung von Simulationskomponenten',
        shortDescription: 'Verschiedenste Programmiertätigkeiten als Wissenschaftliche Hilfskraft an der Fakultät Maschinenbau der TU Dortmund. ',
        customer: 'TU Dortmund, Fachbereich Maschinenbau',
        description: 'Verschiedenste Programmiertätigkeiten als Wissenschaftliche Hilfskraft an der Fakultät Maschinenbau der Technischen Universität Dortmund.' +
          'Das zentrale Projekt für mich  war in dieser Zeit die Erstellung, Erweiterung und Pflege einer GUI für die Ansteuerung eines bereits bestehenden Kammermodel Simulators',
        from: 'März 2006',
        to: 'September 2009',
        role: 'Software Engineer',
        technologies: ['C++', 'Microsoft Visual Studio', 'VBA'],
        tasks: [
          'Entwicklung von Simulationskomponenten als Wissenschaftliche Hilfskraft',
        ],
      },
    ];
  }
}
