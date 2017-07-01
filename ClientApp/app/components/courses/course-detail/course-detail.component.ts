import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  //providers: [CoursesService]
})
export class CourseDetailComponent implements OnInit {
  course: Course;
  id: number;

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => { this.id = +params['id'];
        this.course = this.coursesService.getCourse(this.id); }
    );
  }

}
