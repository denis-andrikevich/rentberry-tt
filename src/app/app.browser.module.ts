import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';


@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'rentberry-app' }),
    TransferHttpCacheModule,
    BrowserTransferStateModule,
    AppModule
  ],
  providers: [
    { provide: 'ORIGIN_URL', useValue: location.origin }
  ]
})

export class AppBrowserModule {
}
