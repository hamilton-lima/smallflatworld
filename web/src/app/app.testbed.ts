import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LogLevel, NgxFancyLoggerModule } from 'ngx-fancy-logger';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialAllComponentsModule } from './material-all-components-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { ShareComponent } from './multiplayer/share/share.component';
import { ConnectComponent } from './multiplayer/connect/connect.component';
import { RealmUploadComponent } from './realm/realm-upload/realm-upload.component';
import { RendererComponent } from './renderer/renderer.component';

export const APP_TESTBED_MODULE = {
  declarations: [
    AppComponent,
    RendererComponent,
    RealmUploadComponent,
    ConnectComponent,
    ShareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxFancyLoggerModule.forRoot({
      showTime: false,
      showEmoji: false,
      logLevel: LogLevel.INFO,
    }),
    BrowserAnimationsModule,
    MaterialAllComponentsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
};
