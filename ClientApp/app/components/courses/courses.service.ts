// import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Course } from './course.model';

import { ActivatedRoute, Router } from '@angular/router';

import { OnInit } from '@angular/core';

export class CoursesService {
  coursesChanged = new Subject<Course[]>();
  myCourse: Course;

  courses: Course[] = [new Course(1001, 'Alegbra I', 'Mike Smith',
	  'http://static6.businessinsider.com/image/553e63c6ecad04144fe9d417/9-science-backed-ways-men-can-appear-more-attractive-to-women.jpg',
	  'This class will teach you how to solve simple linear equations', new Date),

  new Course(2002, 'Alegbra II', 'Irina Shayk',
	  'http://www.wonderslist.com/wp-content/uploads/2015/10/Hottest-Russian-Girl-Irina-Shayk.jpg',
	  'This class will teach you how to solve more complicated equations', new Date)];

  constructor() { }



  getCourses() {
    return this.courses.slice();
  }

  getCourse(id: number) {
    return this.courses.find(x => x.id === id);
  }

  getNewId() {
    let maxId = 0;
    for (let c of this.courses) {

      if ( c.id >= maxId ) {
        maxId = c.id;
      }

    }
    return maxId + 1;
  }

  addCourse(myCourse: Course) {
    this.courses.push(myCourse);
    this.coursesChanged.next(this.courses.slice());
  }


  updateCourse(id: number, newCourse: Course) {

    let myCourse = this.courses.find(x => x.id === id);

    // Find the index of myCourse in courses.
    let index = 0;
    for (let c of this.courses) {
      if( c.id === myCourse.id) {
        break;
      }
      index += 1;
    }

    // alert('in updateCourse with index = ' + index);
    // console.log('courses.length = ' + this.courses.length);

    if (index <=  this.courses.length -1 ) {
      this.courses[index] = newCourse;
	  this.coursesChanged.next(this.courses.slice());
	  //this.router.navigate(['courses']);
    }
  }

  deleteCourse(index: number) {
    this.courses.splice(index,1);
    this.coursesChanged.next(this.courses.slice());
  }

  setCourses(courses: Course[]) {
    this.courses = courses;
    this.coursesChanged.next(this.courses.slice());
  }

}

