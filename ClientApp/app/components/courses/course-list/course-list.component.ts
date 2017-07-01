import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit, OnDestroy {
  dataRead = false;
  subscription: Subscription;
  courses: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {

    // This is listener. It only gets executed when notified of a change in classes in classesService.
    this.subscription = this.coursesService.coursesChanged.subscribe(
      (courses: Course[]) => {
        this.courses = courses;
      }
    );
    // End of listener

    // Must still get classes if the above subscription is not executed.
    this.courses = this.coursesService.getCourses();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
