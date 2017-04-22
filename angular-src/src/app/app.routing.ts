import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MainComponent} from './components/main/main.component';
import {HeaderComponent} from './components/header/header.component';
import {ChatComponent} from './components/chat/chat.component';


const appRoutes : Routes = [
    {
        path: '',
        component: MainComponent
    },
    {
      path: 'chat',
      component: ChatComponent
    }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
