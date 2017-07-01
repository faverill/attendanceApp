import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component'

import { HomeComponent } from './components/home/home.component';

import { CoursesComponent } from './components/courses/courses.component';

import { CourseListComponent } from './components/courses/course-list/course-list.component';

import { CourseDetailComponent } from './components/courses/course-detail/course-detail.component';

import { CourseItemComponent } from './components/courses/course-list/course-item/course-item.component';

import { CourseEditComponent } from './components/courses/course-edit/course-edit.component';

import { DropdownDirective } from './components/shared/dropdown.directive';

import { CoursesService } from './components/courses/courses.service';

//Questionable imports
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';


export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
		AppComponent,
		CoursesComponent,
		CourseListComponent,
		CourseDetailComponent,
		CourseItemComponent,
		CourseEditComponent,
		DropdownDirective,
    ],
	imports: [
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		BrowserModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'courses', pathMatch: 'full' },
			{ path: 'courses', component: CourseListComponent },
			{ path: 'courses/:id', component: CourseDetailComponent },
			{ path: 'courses/:id/:mode', component: CourseEditComponent },
            { path: '**', redirectTo: 'courses' }
        ])
	],
	providers: [CoursesService]  //Strange, but you have to provide CoursesService here as well as in app.component.ts
};
