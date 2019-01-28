import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NeedAuthGuard} from './auth.guard';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {LoginModule} from './login/login.module';
import {DashboardModule} from './dashboard/dashboard.module';

const appRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: '**',
    component: LoginComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    LoginModule,
    DashboardModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
