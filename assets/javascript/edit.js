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

let name = "Trần Hàn Minh";
let year = 2021;
let educate = "Đại học đại trà";
let program = "Kỹ thuật máy tính 2021";
let institute = "Trường Công nghệ thông tin và Truyền thông";
let status = "Học";
let sex = "Nam";
let classs = "Kĩ thuật máy tính 01-K66";
let grade = "66";
let email = "minh.th210605@sis.hust.edu.vn";
let avatar = "./assets/img/avartar.jpg";

var Minh2021065 = new Student(name, year, educate, program, institute, status, sex, classs, grade, email);

function onOkClick() {
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let educate = document.getElementById("educate").value;
    let program = document.getElementById("program").value;
    let institute = document.getElementById("institute").value;
    let status = document.getElementById("status").value;
    let sex = document.getElementById("sex").value;
    let classs = document.getElementById("class").value;
    let grade = document.getElementById("grade").value;
    let email = document.getElementById("email").value;
    let avatar = document.getElementById("avatar").src;
    let student = new Student(name, year, educate, program, institute, status, sex, classs, grade, email, avatar);

    let flagOk = 1;
    localStorage.setItem("flagOk", flagOk);
    localStorage.setItem("UpdateInfor", JSON.stringify(student));

    window.location.href = "index.html";
}

function onCancelClick() {
    window.location.href = "index.html";
}

function onResetClick() {
    let Minh2021065 = JSON.parse(localStorage.getItem('student'));
        this.document.getElementById('name').value = Minh2021065.name;
        this.document.getElementById('year').value = Minh2021065.year;
        this.document.getElementById('educate').value = Minh2021065.educate;
        this.document.getElementById('program').value = Minh2021065.program;
        this.document.getElementById('institute').value = Minh2021065.institute;
        this.document.getElementById('status').value = Minh2021065.status;
        this.document.getElementById('sex').value = Minh2021065.sex;
        this.document.getElementById('class').value = Minh2021065.classs;
        this.document.getElementById('grade').value = Minh2021065.grade; 
        this.document.getElementById('email').value = 
        Minh2021065.email;
        this.document.getElementById('avatar').src = Minh2021065.avatar;
}

var imageUpload = {
    imageUrl: ''
}
function onImageUpload() {
    var file = document.getElementById("imageUpload").files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        imageUpload.imageUrl = reader.result;
    }
    reader.readAsDataURL(file);
}

function onImgClick() {
    var file = document.getElementById("imageUpload").files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
        imageUpload.imageUrl = reader.result;
        document.getElementById("avatar").src = imageUpload.imageUrl;
    }
    reader.readAsDataURL(file);
}
