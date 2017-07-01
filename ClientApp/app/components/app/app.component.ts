import { Component } from '@angular/core';
import { CoursesService } from '../courses/courses.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [CoursesService]
})
export class AppComponent {
}
