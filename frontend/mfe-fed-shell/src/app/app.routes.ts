import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './services/auth-guard.service';
import { RegisterClassesComponent } from './pages/register-classes/register-classes.component';

export const routes: Routes = [
  /*{
    path: 'mfe-fed-admin',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Component', // Expondo o componente standalone
      }).then((m) => m.AppComponent), // Nome do componente standalone
  },
  {
    path: 'mfe-fed-user',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Component', // Expondo o componente standalone
      }).then((m) => m.AppComponent), // Nome do componente standalone
  },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },*/
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signup",
    component: SignUpComponent
  },
  {
    path: "user",
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "teacher",
    component: RegisterClassesComponent
  }
];
