

var level0 = new Knowledge('0');
var level1 = new Knowledge('1');
var level2 = new Knowledge('2');
var level3 = new Knowledge('3');
var level4 = new Knowledge('4');


var student1 = new Student('Vasyl Bereza');
var student2 = new Student('Kolya White');
var student3 = new Student('Ulyana Yong');
var student4 = new Student('Mykyta Glad');
var student5 = new Student('Kateryna Puchyk');
var student6 = new Student('Nazar Kulya');


student1.setKnowledge();
student2.setKnowledge(level0);
student3.setKnowledge(level1);
student4.setKnowledge(level2);
student5.setKnowledge(level3);
student6.setKnowledge(level4);


var university = new University('CH.U.I.');

university.setArrStud(student1);
university.setArrStud(student2);
university.setArrStud(student3);
university.setArrStud(student4);
university.setArrStud(student5);
university.setArrStud(student6);

var intership = new Intership('Interlink');
intership.setArrStud(university.getArrStud());

studetsIntership = intership.getArrStud();

var list = "";
for(var i = 0; i < studetsIntership.length; i++) {
   list += studetsIntership[i].getName()+ "\n"  ; 

}
console.log(list);


function Intership(nameInter) {

	var _nameInter = nameInter;
	var _arrStudInt = [];
	this.setArrStud = function (arrStudent) {
		var student;
		for (var i = 0; i < arrStudent.length; i++) {
			student = arrStudent[i];
			if (typeof student.getKnowledge() != "undefined") {
           
				if (student.getKnowledge().getLevel() >= 2) {
					_arrStudInt.push(student);
				}
			}
		else {
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



function Student(name){
	
	var _name = name;
	var _knowledge;
	
	this.getName = function(){
		return _name;
	} 
	this.setKnowledge = function(knowledge){
		if (knowledge instanceof Knowledge){
			_knowledge = knowledge;
			
		} 
	}
	this.getKnowledge = function(){
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

	this.getName = function () {
		return _nameUni;
	}
	this.getArrStud = function () {
		return _arrStud;
	}

}