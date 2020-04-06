import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GsecAppModule } from './gsec-app/gsec-app.module';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    RouterModule,
    GsecAppModule.forRoot([
      { 
        path: '', component: HomeComponent 
      } as Route,
      { 
        path: 'settings',
        loadChildren:() => import('./settings/settings.module').then(mod => mod.SettingsModule)
      } as Route
    ])
  ],
  declarations: [ AppComponent, HomeComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
