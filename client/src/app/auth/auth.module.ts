import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthHrGuard } from './auth-hr.guard';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]),
  ],
  providers: [AuthService, AuthGuard, AuthHrGuard],
  exports: [
    RegisterComponent,
    LoginComponent
  ],
})
export class AuthModule {}
