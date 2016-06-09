"use strict";

function Student(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  this.name = `${fname} #{lname}`;
  this.courses = [];
}

function Course(courseName, department, credits, days, times) {
  this.courseName = courseName;
  this.department = department;
  this.credits = credits;
  this.days = days;
  this.times = times;
  this.students = [];
}

Student.prototype.enroll = function(course) {

  this.courses.forEach(origCourse => {
    if (origCourse.conflictsWith(course)) {
      throw `${course.courseName} conflicts with ${origCourse.courseName}`;
    }
  });

  if (this.courses.indexOf(course) === -1) {
    this.courses.push(course);
  }

  if (course.students.indexOf(this) === -1) {
    course.students.push(this);
  }
};

Student.prototype.hasConflict = function(course) {
  let conflict = false;
  this.courses.forEach(orig => {
    if (orig.conflictsWith(course)) {
      conflict = true;
    }
  });
  return conflict;
};

Course.prototype.addStudent = function(student) {
  student.enroll(this);
};

Course.prototype.conflictsWith = function(crs) {
  let conflictDay = false;
  this.days.forEach(day => {
    if (crs.days.includes(day)) {
      conflictDay = true;
    }
  });

  let conflictTime = false;
  this.times.forEach( time => {
    if (crs.times.includes(time)) {
      conflictTime = true;
    }
  });

  if (conflictDay && conflictTime) {
    return true;
  }

  return false;
};

let max = new Student('Max', 'Brenner');
let todd = new Student('Todd', 'Yannacone');

let chem = new Course('Chemistry', 'Science', 5, ['mon', 'wed'], [1, 5, 8]);
let choc = new Course('Chocolate 101', 'Culinary Arts', 3, ['mon', 'fri'], [1, 8]);
let art = new Course('Art', 'Artistic Endeavors', 1, ['wed'], [5]);

todd.enroll(art);
choc.addStudent(max);
choc.conflictsWith(chem);
art.conflictsWith(choc);

todd.enroll(chem);
