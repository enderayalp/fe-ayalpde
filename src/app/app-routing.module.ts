import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './projects/project/project.component';
import { BlogComponent } from './blogs/blog/blog.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'blog', component: BlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
