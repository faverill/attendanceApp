import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { CoursesService } from '../courses.service';
import { Course } from '../course.model';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css'],
  //providers: [CoursesService]
})
export class CourseEditComponent implements OnInit {
  id : number;
  editMode = false;
  courseForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router, private coursesService: CoursesService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // console.log('params =' + this.route.snapshot.params['mode']);
        this.editMode = this.route.snapshot.params['mode'] == 'edit';
        // this.editMode = true;
        this.initForm();
      }
    );
  }

  private initForm() {
    let courseId = 1;
    let courseName = '';
    let courseTeacher = '';
    let courseDescription = '';
    let courseTeacherImagePath = '';
    let courseCreationDate = new Date();



    if (this.editMode) {
      const myCourse = this.coursesService.getCourse(this.id);
      courseId = myCourse.id;
      courseName = myCourse.name;
      courseTeacher = myCourse.teacher;
      courseDescription = myCourse.description;
      courseTeacherImagePath = myCourse.teacherImagePath;
      courseCreationDate = myCourse.creationDate;
    } else {
      courseId = this.coursesService.getNewId();
      this.id = courseId;
    }

    this.courseForm = new FormGroup({
      'id': new FormControl(courseId),
      'name': new FormControl(courseName),
      'teacher': new FormControl(courseTeacher),
      'teacherImagePath': new FormControl(courseTeacherImagePath),
      'description': new FormControl(courseDescription),
      'creationDate': new FormControl(courseCreationDate)
    });
  }

  onSubmit() {
    const newCourse = new Course(
      this.courseForm.value['id'],
      this.courseForm.value['name'],
      this.courseForm.value['teacher'],
      this.courseForm.value['teacherImagePath'],
      this.courseForm.value['description'],
      this.courseForm.value['creationDate']
    );
    if (this.editMode) {
      this.coursesService.updateCourse(this.id, newCourse);
    } else {
      this.coursesService.addCourse(newCourse);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['courses',this.id]);
  }



}
