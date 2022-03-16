import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonPfadComponent } from './components/UI/buttons/button-backward/button-pfad.component';
import { ButtonForwardComponent } from './components/UI/buttons/button-forward/button-forward.component';
import { ConfirmDialogComponent } from './components/UI/dialogs/confirm-dialog/confirm-dialog.component';
import { ConfirmDialogDestructiveComponent } from './components/UI/dialogs/confirm-dialog-destructive/confirm-dialog-destructive.component';
import { ErrorFailureDialogComponent } from './components/UI/dialogs/error-failure-dialog/error-failure-dialog.component';
import { NeutralSystemInformationDialogComponent } from './components/UI/dialogs/neutral-system-information-dialog/neutral-system-information-dialog.component';
import { ProcessDialogComponent } from './components/UI/dialogs/process-dialog/process-dialog.component';
import { WarningDialogComponent } from './components/UI/dialogs/warning-dialog/warning-dialog.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TestPageComponent } from './components/pages/test-page/test-page.component';
import { CommissioningComponent } from './components/UI/dialogs/commissioning/commissioning.component';
import { BackdropComponent } from './components/UI/backdrop/backdrop.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonPfadComponent,
    ButtonForwardComponent,
    ConfirmDialogComponent,
    ConfirmDialogDestructiveComponent,
    ErrorFailureDialogComponent,
    NeutralSystemInformationDialogComponent,
    ProcessDialogComponent,
    WarningDialogComponent,
    HomeComponent,
    TestPageComponent,
    CommissioningComponent,
    BackdropComponent
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
