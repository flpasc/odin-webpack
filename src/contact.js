import Nico from "./img/Nico.jpeg";
import Wife from "./img/Squirilla.jpeg";
import Child from "./img/child.jpeg";
import { Employee } from "./employee";

export const contact = () => {
	const content = document.getElementById("main");
	content.innerHTML = "";

	const header = document.createElement("h1");
	header.textContent = "Contact Us!";
	header.id = "contact";

	const employeeList = document.createElement("div");
	employeeList.id = "employee-list";

	employees.forEach((emp) => {
		const employ = document.createElement("div");
		employ.id = "employee";

		const empName = document.createElement("div");
		empName.id = "employee-name";
		empName.textContent = emp.name;

		const empAge = document.createElement("div");
		empAge.id = "employee-age";
		empAge.textContent = emp.age;

		const empAbout = document.createElement("div");
		empAbout.id = "employee-about";
		empAbout.textContent = emp.about;

		const empImg = document.createElement("img");
		empImg.src = emp.img;

		employ.appendChild(empImg);
		employ.appendChild(empName);
		employ.appendChild(empAge);
		employ.appendChild(empAbout);

		employeeList.appendChild(employ);
	});

	content.appendChild(header);
	content.appendChild(employeeList);
};

const employees = [];

const emp1 = new Employee("Nico", "13", "Is the leader and founder of the Nico Nuts Company", Nico);
const emp2 = new Employee("Squirila", "11", "Wife and the better half. Pregnant, as always", Wife);
const emp3 = new Employee("Maxisquirlian", "3", "More trouble than help", Child);

employees.push(emp1);
employees.push(emp2);
employees.push(emp3);
