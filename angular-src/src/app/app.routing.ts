import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './components/main/main.component';
import {HeaderComponent} from './components/header/header.component';
import {PresentersComponent} from './components/presenters/presenters.component';
import {PropositionComponent} from './components/proposition/proposition.component';
import {ChatComponent} from './components/chat/chat.component';
import {ContactComponent} from './components/contact/contact.component';
import {AdminComponent} from './components/admin/admin.component';
<<<<<<< HEAD
import {LoginComponent} from './components/login/login.component';

import {AuthGuard} from './auth.guard';

=======
>>>>>>> refs/remotes/origin/master


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
<<<<<<< HEAD
      component: AdminComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'login',
      component: LoginComponent
=======
      component: AdminComponent
>>>>>>> refs/remotes/origin/master
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
