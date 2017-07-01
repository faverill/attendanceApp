export class Course {
  public id: number;
  public name: string;
  public teacher: string;
  public teacherImagePath: string;
  public description: string;
  public creationDate: Date;

  constructor(id: number, name: string, teacher: string, teacherImagePath: string, des: string, date: Date) {
    this.id = id;
    this.name = name;
    this.teacher = teacher;
    this.teacherImagePath = teacherImagePath;
    this.description = des;
    this.creationDate = date;
  }
}
