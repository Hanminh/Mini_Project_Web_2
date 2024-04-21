class Student {
    constructor (name, year, educate, program, institute, status, sex, classs, grade, email, avatar) {
        this.name = name;
        this.year = year;
        this.educate = educate;
        this.program = program;
        this.institute = institute;
        this.status = status;
        this.sex = sex;
        this.classs = classs;
        this.grade = grade;
        this.email = email;
        this.avatar = avatar;
    }

    setName(name) {
        this.name = name;
    }
    setYear(year) {
        this.year = year;
    }
    setEducate(educate) {
        this.educate = educate;
    }
    setProgram(program) {
        this.program = program;
    }
    setInstitute(institute) {
        this.institute = institute;
    }
    setStatus(status) {
        this.status = status;
    }
    setSex(sex) {
        this.sex = sex;
    }
    setClass(classs) {
        this.classs = classs;
    }
    setGrade(grade) {
        this.grade = grade;
    }
    setEmail(email) {
        this.email = email;
    }
    setAvatar(avatar) {
        this.avatar = avatar;
    }
}

function getStudenInfo(student) {
    console.log("Name: " + student.name);
    console.log("Year: " + student.year);
    console.log("Educate: " + student.educate);
    console.log("Program: " + student.program);
    console.log("Institute: " + student.institute);
    console.log("Status: " + student.status);
    console.log("Sex: " + student.sex);
    console.log("Class: " + student.classs);
    console.log("Grade: " + student.grade);
    console.log("Email: " + student.email);
}

const name = "Trần Hàn Minh";
const year = 2021;
const educate = "Đại học đại trà";
const program = "Kỹ thuật máy tính 2021";
const institute = "Trường Công nghệ thông tin và Truyền thông";
const status = "Học";
const sex = "Nam";
const classs = "Kĩ thuật máy tính 01-K66";
const grade = "66";
const email = "minh.th210605@sis.hust.edu.vn";
const avatar = "./assets/img/avartar.jpg";

var Minh2021065 = new Student(name, year, educate, program, institute, status, sex, classs, grade, email, avatar);

localStorage.setItem("InitialInformation", JSON.stringify(Minh2021065));

var     flagOk = localStorage.getItem("flagOk");

if(flagOk == 1) {
    student = JSON.parse(localStorage.getItem("UpdateInfor"));
} else {
    student = JSON.parse(localStorage.getItem("InitialInformation"));
}

this.document.getElementById("name").innerHTML = student.name;
this.document.getElementById("year").innerHTML = student.year;
this.document.getElementById("educate").innerHTML = student.educate;
this.document.getElementById("program").innerHTML = student.program;
this.document.getElementById("institute").innerHTML = student.institute;
this.document.getElementById("status").innerHTML = student.status;
this.document.getElementById("sex").innerHTML = student.sex;
this.document.getElementById("class").innerHTML = student.classs;
this.document.getElementById("grade").innerHTML = student.grade;
this.document.getElementById("email").innerHTML = student.email;
this.document.getElementById("avatar").src = student.avatar;

getStudenInfo(student);

localStorage.setItem("student", JSON.stringify(student));

console.log(flagOk);
