import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'
import { HeaderComponent } from './components/header/header.component'

import { HomeComponent } from './components/home/home.component';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
		HomeComponent,
		HeaderComponent
    ],
    imports: [
        RouterModule.forRoot([
            //{ path: '', redirectTo: 'home', pathMatch: 'full' },
            //{ path: 'home', component: HomeComponent },
            //{ path: '**', redirectTo: 'home' }
			{ path: '', redirectTo: 'app', pathMatch: 'full' },
            { path: 'app', component: AppComponent },
            { path: '**', redirectTo: 'app' }
        ])
    ]
};
