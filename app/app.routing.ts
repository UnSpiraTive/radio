import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './components/main/main.component';
import {HeaderComponent} from './components/header/header.component';
import {PresentersComponent} from './components/presenters/presenters.component';
import {AdminPrezenterzyComponent} from './components/admin-prezenterzy/admin-prezenterzy.component';
import {AdminPropozycjeComponent} from './components/admin-propozycje/admin-propozycje.component';
import {AdminRamowkaComponent} from './components/admin-ramowka/admin-ramowka.component';
import {AdminNewsComponent} from './components/admin-news/admin-news.component';
import {PropositionComponent} from './components/proposition/proposition.component';
import {ChatComponent} from './components/chat/chat.component';
import {ContactComponent} from './components/contact/contact.component';
import {AdminComponent} from './components/admin/admin.component';
import {LoginComponent} from './components/login/login.component';

import {AuthGuard} from './auth.guard';



const appRoutes : Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
      path: 'chat',
      component: ChatComponent
    },
    {
      path: 'presenters',
      component: PresentersComponent
    },
    {
      path: 'proposition',
      component: PropositionComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'admin',
      component: AdminComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'admin/news',
      component: AdminNewsComponent
    },
    {
      path: 'admin/presenters',
      component: AdminPrezenterzyComponent
    },
    {
      path: 'admin/proposition',
      component: AdminPropozycjeComponent
    },
    {
      path: 'admin/ramowka',
      component: AdminRamowkaComponent
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
