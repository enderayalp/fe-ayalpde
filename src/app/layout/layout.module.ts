import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppLayoutComponent} from './components/app-layout/app-layout.component';
import {HeaderComponent} from './components/header/header.component';
import {SharedModule} from '../shared/shared.module';
import {BlogComponent} from "../blogs/blog/blog.component";

@NgModule({
  declarations: [AppLayoutComponent, HeaderComponent],
  exports: [AppLayoutComponent],
  imports: [CommonModule, RouterModule, SharedModule],
})
export class LayoutModule {
}
