import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlanosComponent } from './components/planos/planos.component';
import { QuemsomosComponent } from './components/quemsomos/quemsomos.component';
import { ComofuncionaComponent } from './components/comofunciona/comofunciona.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ProfessoresComponent } from './components/professores/professores.component';
import { PoliticaComponent } from './components/politica/politica.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'planos', component: PlanosComponent },
  { path: 'quemsomos', component: QuemsomosComponent },
  { path: 'comofunciona', component: ComofuncionaComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'professores', component: ProfessoresComponent },
  { path: 'politica', component: PoliticaComponent },
];
