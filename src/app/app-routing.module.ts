// import { NgModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './project-files/services/services.component';
import { WorkBookComponent } from './project-files/work-book/work-book.component';
import { AboutUsComponent } from './project-files/about-us/about-us.component';
import { DashboardComponent } from './project-files/dashboard/dashboard.component';
import { ReUseComponent } from './project-files/re-use/re-use.component';

const appRoutes: Routes = [
{path: '', redirectTo:'/projectScale', pathMatch: 'full' },
{path: 'aboutMe', component: AboutUsComponent},
{path: 'workBook', component: WorkBookComponent },
{path: 'services', component: ServicesComponent },
{path: 'workBook', component: WorkBookComponent },
{path: 'projectScale', component: DashboardComponent },
{path: 'reUse', component: ReUseComponent },


];


@NgModule({
 imports:[RouterModule.forRoot(appRoutes)],
 exports: [RouterModule]	

})
export class AppRoutingModule {
}