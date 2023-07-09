import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [

  {path:'',redirectTo:'home',pathMatch:'full'},

  {
    path:'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },

  {
    path:'about',loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },

  {
    path:'project', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
  },

  {
    path:'contact', loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },

  {path:'**',redirectTo:'home',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
