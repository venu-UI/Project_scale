import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './project-files/about-us/about-us.component';
import { ServicesComponent } from './project-files/services/services.component';
import { WorkBookComponent } from './project-files/work-book/work-book.component';
import { MenubarComponent } from './project-files/menubar/menubar.component';
import { DashboardComponent } from './project-files/dashboard/dashboard.component';
import { ReUseComponent } from './project-files/re-use/re-use.component';
// import { reuseService } from './project-files/re-use/re-use.service';
import { reuseServices } from './services/re-use.service';
import { reUse } from './modals/re-use-modal';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ServicesComponent,
    WorkBookComponent,
    MenubarComponent,
    DashboardComponent,
    ReUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [reuseServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
