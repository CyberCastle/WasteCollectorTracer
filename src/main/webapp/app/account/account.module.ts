import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WasteCollectorTracerSharedModule } from 'app/shared/shared.module';

import { SessionsComponent } from './sessions/sessions.component';
import { PasswordStrengthBarComponent } from './password/password-strength-bar.component';
import { PasswordComponent } from './password/password.component';
import { PasswordResetInitComponent } from './password-reset/init/password-reset-init.component';
import { PasswordResetFinishComponent } from './password-reset/finish/password-reset-finish.component';
import { SettingsComponent } from './settings/settings.component';
import { accountState } from './account.route';

@NgModule({
  imports: [WasteCollectorTracerSharedModule, RouterModule.forChild(accountState)],
  declarations: [
    PasswordComponent,
    PasswordStrengthBarComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SessionsComponent,
    SettingsComponent,
  ],
})
export class AccountModule {}
