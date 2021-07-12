import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RendererComponent } from './renderer/renderer.component';
import { LogLevel, NgxFancyLoggerModule } from 'ngx-fancy-logger';

@NgModule({
  declarations: [AppComponent, RendererComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxFancyLoggerModule.forRoot({
      showTime: false,
      logLevel: LogLevel.INFO,
      levelEmoji: {
        [LogLevel.INFO]: 'SFW 🍕',
        [LogLevel.DEBUG]: 'SFW 🐞',
        [LogLevel.WARNING]: 'SFW 🙄',
        [LogLevel.ERROR]: 'SFW 💀',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
