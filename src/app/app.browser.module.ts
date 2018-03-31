import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    AppModule
  ],
  providers: [
    { provide: 'ORIGIN_URL', useValue: location.origin }
  ]
})

export class AppBrowserModule {
}
