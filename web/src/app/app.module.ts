import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RendererComponent } from './renderer/renderer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAllComponentsModule } from './material-all-components-module';
import { RealmUploadComponent } from './realm/realm-upload/realm-upload.component';
import { ConnectComponent } from './multiplayer/connect/connect.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareComponent } from './multiplayer/share/share.component';
import { JoinComponent } from './multiplayer/join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    RendererComponent,
    RealmUploadComponent,
    ConnectComponent,
    ShareComponent,
    JoinComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialAllComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
