import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { GsecAppComponent } from './gsec-app.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    GsecAppComponent
  ],
  exports: [
    GsecAppComponent
  ]
})
export class GsecAppModule {
  static forRoot(routes: Route[] = []): ModuleWithProviders {
    return {
      ngModule: GsecAppModule,
      providers: [
        ...RouterModule.forRoot(routes).providers
      ]
    }
  }
}