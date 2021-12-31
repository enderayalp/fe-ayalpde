export interface Project {
  //Project Titel
  title: string;
  //Kunde
  customer: string;
  //Project Kurzberschreibung
  shortDescription: string;
  //Project Beschreibung
  description: string;
  //Project Begin
  from: string;
  //Project Ende
  to: string;
  //Eigene Funktionen
  role: string;
  //Eingesetzte Technologien
  technologies: string[];
  //Eigene Aufgaben im Projekt
  tasks: string[];
}
