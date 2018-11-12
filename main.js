var levelStud = [];


levelStud[0] = new Knowledge('0');
levelStud[1] = new Knowledge('1');
levelStud[2] = new Knowledge('2');
levelStud[3] = new Knowledge('3');
levelStud[4] = new Knowledge('4');


function Middle(arrlevelStud) {

	var sumlevel = 0;
	for (i = 0; i < arrlevelStud.length; i++) {
		sumlevel += parseInt(arrlevelStud[i].getLevel());
	}
	return parseInt(sumlevel / arrlevelStud.length);
}
var middlelevel = Middle(levelStud);

var student = [];


function addArrNameFromSomething() {
	var arrNameOfStudents = [
    'Vasyl Bereza',
    'Kolya White',
    'Ulyana Yong',
    'Mykyta Glad',
    'Kateryna Puchyk',
    'Nazar Kulya'];


	for (i = 0; i < arrNameOfStudents.length; i++) {
		student[i] = new Student(arrNameOfStudents[i]);
	}
	return student;
}
student = addArrNameFromSomething();

function setRandomKnowledge(arrofStudents, stlevel) {
	for (i = 0; i < arrofStudents.length; i++) {
		var lev = Math.floor(Math.random() * stlevel.length);
		arrofStudents[i].setKnowledge(stlevel[lev]);
//		console.log(lev + ' ' + arrofStudents[i].getName());
	}
}

setRandomKnowledge(student, levelStud);


var university = new University('CH.U.I.');
university.addStudents(student);



var intership = new Intership('Interlink');
intership.setArrStud(university.getArrStud(), middlelevel);

studetsIntership = intership.getArrStud();

var list = "";
for (var i = 0; i < studetsIntership.length; i++) {
	list += studetsIntership[i].getName() + "\n";

}
console.log("Intership list:\n" + list);


function Intership(nameInter) {

	var _nameInter = nameInter;
	var _arrStudInt = [];
	this.setArrStud = function (arrStudent, middlelevel) {
		var student;
		for (var i = 0; i < arrStudent.length; i++) {
			student = arrStudent[i];
			if (typeof student.getKnowledge() != "undefined") {

				if (student.getKnowledge().getLevel() > middlelevel) {
					_arrStudInt.push(student);
				}
			} else {
				console.log(student.getName() + " doesn`t have knowledge");
			}
		}
	};
	this.getArrStud = function () {
		return _arrStudInt;
	}
}

function Knowledge(level) {

	var _level = level;
	this.getLevel = function () {
		return _level;
	};

}


function Student(name) {

	var _name = name;
	var _knowledge;

	this.getName = function () {
		return _name;
	}
	this.setKnowledge = function (knowledge) {
		if (knowledge instanceof Knowledge) {
			_knowledge = knowledge;

		}
	}
	this.getKnowledge = function () {
		return _knowledge;
	}
}

function University(nameUni) {

	var _nameUni = nameUni;
	var _arrStud = [];

	this.setArrStud = function (student) {
		if (student instanceof Student) {
			_arrStud.push(student);
		} else {
			console.log("Type is wrong");
		}
	}
	this.addStudents = function (arrStudent) {
		for (i = 0; i < arrStudent.length; i++) {
			_arrStud.push(arrStudent[i])
		}
	}

	this.getName = function () {
		return _nameUni;
	}
	this.getArrStud = function () {
		return _arrStud;
	}

}
