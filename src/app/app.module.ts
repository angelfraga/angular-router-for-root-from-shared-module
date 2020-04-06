import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GsecAppModule } from './gsec-app/gsec-app.module';
import { Route } from '@angular/router';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    GsecAppModule.forRoot([
      { 
        path: 'settings',
        loadChildren:() => import('./settings/settings.module').then(mod => mod.SettingsModule)
      } as Route
    ])
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
