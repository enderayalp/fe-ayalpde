import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  activeId: string;
  isMobileMenuOpen: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.activeId = 'home'
  }

  setActive(event: MouseEvent) {
    let target = event.target as HTMLElement;
    this.activeId = target.id;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
