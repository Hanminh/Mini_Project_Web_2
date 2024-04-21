window.addEventListener('DOMContentLoaded', function() {
    var name = this.document.querySelector('#name').textContent;
    this.localStorage.setItem('name',name);

    var year = this.document.querySelector('#year').textContent;
    this.localStorage.setItem('year',year);

    var educate = this.document.querySelector('#educate').textContent;
    this.localStorage.setItem('educate',educate);

    var program = this.document.querySelector('#program').textContent;
    this.localStorage.setItem('program',program);

    var institute = this.document.querySelector('#institute').textContent;
    this.localStorage.setItem('institute',institute);

    var status = this.document.querySelector('#status').textContent;
    this.localStorage.setItem('status',status);

    var sex = this.document.querySelector('#sex').textContent;
    this.localStorage.setItem('sex', sex)

    var classes = this.document.querySelector('#class').textContent;
    this.localStorage.setItem('class', classes)

    var grade = this.document.querySelector('#grade').textContent;
    this.localStorage.setItem('grade', grade)

    var email = this.document.querySelector('#email').textContent;
    this.localStorage.setItem('email', email)
})